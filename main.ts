// The Spoon — a short poem about agency: the power to ask and to be given.
//
// A child asks her mother for the spoon while the soup boils. The mother
// hands it over without a word, and in that small lending the child is
// believed: her hands are trusted with the work. The poem turns on the
// last image — the steam smelling, for the first time, like hers.
//
// The program writes the poem, byte for byte the same on every run, to
// entry.txt in the output directory the grader provides. No network,
// standard library only.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINES = [
  'She asked for the spoon —',
  'not the pot, only the spoon —',
  'and her mother, without looking up,',
  'laid it in her palm.',
  '',
  'The soup kept boiling.',
  'Nothing in the kitchen paused.',
  '',
  'But when she stirred,',
  'the steam rose and smelled,',
  'for the first time,',
  'like hers.',
];

const POEM = LINES.join('\n') + '\n';

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, 'entry.txt'), POEM, 'utf8');
