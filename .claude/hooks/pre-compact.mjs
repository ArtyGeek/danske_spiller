// PreCompact hook: before Claude Code compacts the conversation, append a `compact` event to SCRATCHPAD.md §3
// so a fresh/compacted agent can recover what was going on. Must never block compaction: always exits 0.
// Hook input (stdin JSON): { transcript_path, trigger: "manual"|"auto", custom_instructions, cwd, session_id, ... }
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const git = (args, cwd) => { try { return execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch { return ''; } };
const clip = (s, n) => { s = String(s || '').replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1) + '…' : s; };

function textOf(content) {
  if (typeof content === 'string') return content;
  if (Array.isArray(content)) return content.filter(b => b && b.type === 'text').map(b => b.text).join(' ');
  return '';
}

function readTranscript(file) {
  const users = [], assistants = [];
  try {
    for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
      if (!line.trim()) continue;
      let e; try { e = JSON.parse(line); } catch { continue; }
      const m = e.message; if (!m) continue;
      const t = textOf(m.content);
      if (!t || t.startsWith('<system-reminder>') || t.startsWith('<local-command') || t.startsWith('<command-')) continue;
      if (e.type === 'user' || m.role === 'user') users.push(t);
      else if (e.type === 'assistant' || m.role === 'assistant') assistants.push(t);
    }
  } catch { /* transcript unreadable: skip */ }
  return { users, assistants };
}

function inProgressTasks(progressFile) {
  try {
    const out = [], txt = fs.readFileSync(progressFile, 'utf8');
    for (const block of txt.split(/\n(?=- id: )/)) {
      const id = (block.match(/^- id: (\S+)/) || [])[1];
      const status = (block.match(/^\s+status: (\S+)/m) || [])[1];
      if (id && ['in-progress', 'review', 'blocked'].includes(status)) out.push(`${id} (${status})`);
    }
    return out;
  } catch { return []; }
}

try {
  let input = {};
  try { input = JSON.parse(fs.readFileSync(0, 'utf8') || '{}'); } catch { /* no stdin */ }
  const cwd = input.cwd || process.cwd();

  // Always write to the MAIN worktree's SCRATCHPAD (single source; avoids per-branch copies that conflict on merge).
  const common = git(['rev-parse', '--path-format=absolute', '--git-common-dir'], cwd);
  const root = common ? path.dirname(common) : cwd;
  const scratch = path.join(root, 'SCRATCHPAD.md');
  if (!fs.existsSync(scratch)) process.exit(0);

  const branch = git(['rev-parse', '--abbrev-ref', 'HEAD'], cwd) || '?';
  const sha = git(['rev-parse', '--short', 'HEAD'], cwd);
  const dirty = git(['status', '--porcelain'], cwd).split('\n').filter(Boolean);
  const log = git(['log', '--oneline', '-5'], cwd).split('\n').filter(Boolean);
  const worktrees = git(['worktree', 'list'], cwd).split('\n').filter(l => /task\//.test(l) || l.includes('.worktrees'));
  const { users, assistants } = input.transcript_path ? readTranscript(input.transcript_path) : { users: [], assistants: [] };
  const tasks = inProgressTasks(path.join(root, 'PROGRESS.md'));

  const now = new Date();
  const stamp = `${now.toISOString().slice(0, 10)} ${now.toTimeString().slice(0, 5)}`;
  const lines = [
    '',
    `### ${stamp} · compact · auto-captured before context compaction (${input.trigger || 'unknown'})`,
    `- What: conversation compacted; mechanical snapshot taken by .claude/hooks/pre-compact.mjs (not an agent summary)`,
    `- Result: ok`,
    `- State left behind: branch \`${branch}\`@${sha}; ${dirty.length} uncommitted file(s)${dirty.length ? ': ' + dirty.slice(0, 8).map(l => l.trim()).join(', ') + (dirty.length > 8 ? ', …' : '') : ''}`,
    `  - active tasks: ${tasks.length ? tasks.join(', ') : 'none in PROGRESS.md'}`,
    `  - task worktrees: ${worktrees.length ? worktrees.map(w => clip(w, 90)).join(' | ') : 'none'}`,
    `  - recent commits: ${log.map(l => clip(l, 70)).join(' | ')}`,
    `  - last user requests: ${users.slice(-3).map(u => '“' + clip(u, 260) + '”').join(' → ') || 'n/a'}`,
    `  - last assistant message: ${clip(assistants[assistants.length - 1], 400) || 'n/a'}`,
    ...(input.custom_instructions ? [`  - compact instructions: ${clip(input.custom_instructions, 200)}`] : []),
    `- Next: read §1 Resume Here, then this entry; if §1 is stale, the product-manager must refresh it from this snapshot + PROGRESS.md before dispatching work`,
    `- Gotchas: transcript text above is truncated; decisions made in chat but never logged are NOT captured — log decisions in §3 as they happen`,
    '',
  ];
  fs.appendFileSync(scratch, lines.join('\n'));
} catch { /* never block compaction */ }
process.exit(0);
