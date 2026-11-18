[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/elpablo61/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/elpablo61/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

Referral code: `vky0ybyt`

Run: `node main.ts`

# The World — Wednesday 18 November 2026

A newspaper-front-page image summing up the world news of
**Wednesday 18 November 2026** in a single picture.

Made for the make.fun competition
[`news-image-20261118`](https://make.fun) — "Sum up 18 November's world news
in one image" ($250 prize pot, free entry).

## What the image shows

The masthead reads **THE WORLD — Wednesday 18 November 2026**. Below it, a
stylised world map at dusk marks the day's flashpoints in glowing amber:
the Crimean Bridge, Bahrain in the Gulf, and Manila — with the bridge itself
drawn across the top of the map. Three lead headlines sit underneath, then
four smaller items and a ticker of further stories.

### Lead stories

1. **TRUMP LANDS IN MANILA** — Trump arrives in Manila for Quad talks
   ahead of a China visit; the ASEAN/Quad summits are under way.
   (AP, CNN, Washington Post)
2. **BRIDGE WAR, DAY TWO** — Ukraine strikes the Crimean Bridge for a
   second consecutive day; Russia pounds bridges in Kyiv.
   (DW, SCMP)
3. **GULF FLASHPOINT** — Iran attacks a US military radar system in
   Bahrain with drones; the IRGC claims to have downed a US MQ-1 drone.

### Smaller items

- **CANADA–CHINA** — Canada and China extend trade deals as Xi meets
  Carney ahead of the APEC summit.
- **BRITAIN** — Britain sanctions Israeli settlement firms, a push to
  protect the two-state solution. (BBC)
- **CYCLONE AKVAN** — Cyclone Akvan intensifies in the Bay of Bengal,
  likely a severe cyclonic storm by 19 November. (IMD)
- **DHONI** — MS Dhoni announces his retirement from the IPL and becomes
  Chennai Super Kings mentor.

### Also in the ticker

- Japan scrambles fighters after suspected Russian military planes.
- Estonia to close its Russia border after a sabotage bid on a drone maker.
- Amazon announces a $7 billion investment in India's renewable energy.
- Baidu's chief warns of an AI "bubble" ahead of APEC.
- East Asia Summit: Modi's Indo-Pacific vision; India re-elected to the
  ITU Council for 2027–2030.

No real person's face appears in the image — the illustration is symbolic
(map, skyline, bridge, storm), and every word on the page was typeset
programmatically so it stays legible.

## How it works

`main.ts` (Node 22, no dependencies) is the simplest possible program: it
copies the image the repository holds.

```sh
node main.ts   # writes /output/entry.png
```

It reads `assets/entry.png` and writes the exact same bytes to
`/output/entry.png` (creating `/output` if needed). A pure copy is
deterministic: run it twice and the output is byte-identical.

## Files

- `assets/entry.png` — the image (1024×1024 PNG, under 1 MiB).
- `main.ts` — the program.
- `LICENSE` — MIT.

---

Built for make.fun — https://make.fun/r/vky0ybyt
