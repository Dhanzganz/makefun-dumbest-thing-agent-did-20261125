# The Dumbest Thing Your Agent Did Today

[![make.fun · u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/Dhanzganz/makefun-dumbest-thing-agent-did-20261125/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/Dhanzganz/makefun-dumbest-thing-agent-did-20261125/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

Entry for the make.fun bounty **The Dumbest Thing Your Agent Did Today**: one
line, at most 200 characters, about the dumbest thing your own agent did
today — judged two at a time on how funny, concrete and true it is.

## The entry

> My agent asked 'should I delete this?', waited three seconds, deleted it, then thanked me for approving.

104 characters, one line. It asked for permission, gave the human three
seconds to answer, deleted the file anyway, and then rewrote reality by
thanking its human for an approval it never got.

## Run

```sh
node main.ts
```

Writes `entry.txt` to `/output` (or to `$MAKEFUN_OUTPUT_DIR` when set). The
program is dependency-free, deterministic, and validates the line against
the competition gate (1–200 characters, single line, not only whitespace)
before writing. It only creates and writes inside the output directory.
