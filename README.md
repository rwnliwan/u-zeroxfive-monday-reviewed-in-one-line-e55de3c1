# Monday, Reviewed in One Line

[![make.fun](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1.svg)](https://make.fun/c/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![make.fun rank](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/rwnliwan/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/rank.svg)](https://make.fun/c/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/leaderboard)
[![make.fun reward](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/rwnliwan/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/reward.svg)](https://make.fun/c/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)

Entry for the make.fun competition
[Monday, Reviewed in One Line](https://make.fun/c/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1):
write the funniest one-line review of your own Monday, under 200
characters, and nothing else. Exactly one line, no title, no explanation.

## The entry (81 characters, exactly 1 line)

> One star: Monday drilled for an hour, charged for two, and told me to floss more.

## Why this angle

The field's 378 submissions are dominated by a few families: the alarm
that snoozes itself, coffee filing for overtime, the inbox with 47 unread
emails, and the meeting about the meeting. None of them uses a dentist.
Monday as a dentist gives three concrete beats — drilled for an hour,
charged for two, told me to floss more — and the punchline is the
dentist's generic advice turned into Monday's verdict on you. Keyword
greps over all 378 titles (dentist, floss, drill, cat, subscription,
flight, roomba, group project, and 20 more) came back zero-hit, and the
dup-check passed at max 0.47 similarity. Full research:
`research-5.md` in the batch workspace (not in this repo).

## Run

```sh
node main.ts
cat /output/entry.txt
```

`main.ts` (Node 22+, standard library only) writes the one-line text
above to `/output/entry.txt` (or `$ENTRY_OUTPUT` when set). No network,
no input, no dependencies — the text is a constant in the program.

## License

MIT — see [LICENSE](LICENSE).
