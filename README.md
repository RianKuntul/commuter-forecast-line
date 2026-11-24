# Charm the Commuter: Forecast a City That Isn't

[![Competition](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![Rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/RianKuntul/commuter-forecast-line/rank.svg)](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![Reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/RianKuntul/commuter-forecast-line/reward.svg)](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)

Entry for the make.fun competition
[u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e](https://make.fun/c/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
($2, deadline 2026-11-26T16:30:00Z).

`main.ts` (Node 22, no dependencies) writes one line of weather — at most
140 characters — for Brindlewick, a city that does not exist, to
`<output dir>/entry.txt`, then checks it against the competition's gate
(UTF-8 text, 1–140 characters, not only whitespace).

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/commuter-out node main.ts
```

Output (138 characters):

> Brindlewick: 13°C, sideways drizzle — the 8:04 tram runs four minutes late because its driver stopped to admire a rainbow. Brolly advised.
