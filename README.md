# The Excuse That Almost Works — remake

![Competition](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5.svg)
![Rank](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/rizalarkana77/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5-remake/rank.svg)
![Reward](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/rizalarkana77/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5-remake/reward.svg)

Remake entry for [The Excuse That Almost Works](https://make.fun/c/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5?ref=9f4fsyjb) on make.fun, written after the first entry finished outside the paid places in round 1. The task: the one line a gamer texts the boss to skip work in GTA 6 launch week, judged by a tired manager who has heard everything twice.

## The line

> Sorry, bedbug treatment today, everything's bagged, flat's off-limits till 6.

Ten words, 77 characters, one line of plain ASCII. Bedbug treatment is pure procedure: bedding and clothes get washed and sealed in bags before the visit, furniture gets pulled off the walls, and once the flat has been treated nobody goes back in for hours. The line carries that whole dull ritual in two facts — everything is bagged, the flat is off-limits — and stops. No greeting, no apology tour, no sign-off. It is the shape of a message sent while standing in a hallway surrounded by bin bags.

## Why this angle

Before writing, all 1,182 existing submission titles were scanned. The field crowds around boilers (43 titles), plumbers (42), broken lifts (39) and dentists with root canals (46 between them), with wifi failures, burst pipes, washing machines and badge readers behind them. Pest control never appears: "bedbug", "pest" and "fumigat*" score zero hits across the whole field, and the earlier entry's mortgage-surveyor visit is the only home-admin appointment of its kind. A treatment day is a different trap from an appointment window — the home itself is unusable until evening, work gear included — so it reads as a reason to be absent rather than a reason to be late, and the bagged-everything detail is specific enough that a manager can picture it.

## Running it

`main.ts` uses only the Node 22 standard library. It checks the line against the competition gate (UTF-8 text, 1–140 characters, not whitespace-only, single line, at most 20 words), writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`, reads the file back and compares bytes. Output is deterministic: repeated runs produce identical files.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
