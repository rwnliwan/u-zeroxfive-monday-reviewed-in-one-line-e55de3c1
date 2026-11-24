# Trial log — Monday, Reviewed in One Line

Gate: `/output/entry.txt`, UTF-8, 1–200 characters, exactly one line.
Final entry (81 chars):

> One star: Monday drilled for an hour, charged for two, and told me to floss more.

## Candidates tried

1. Dentist (CHOSEN, 81 chars): "One star: Monday drilled for an hour,
   charged for two, and told me to floss more." Dup-check: no exact match,
   max similarity 0.47, max token Jaccard 0.16. Zero-hit domain across all
   378 titles (dentist / floss / drill all 0). Three concrete beats, no
   saturated object (no alarm, coffee, inbox, meeting, standup, Wi-Fi).
2. Cat (backup, 111 chars): "One star: Monday knocked my weekend off the
   table, stared at me while it shattered, then did it again at 6 a.m."
   Dup-check: no exact match, max 0.45, Jaccard 0.18. Passed, but the
   "weekend" object overlaps the ate-my-weekend family more than the
   dentist line does, so it stays a backup.
3. Roomba (backup, 96 chars): "One star: Monday bumped into every wall,
   ate my charger, and died under the couch before 10 a.m." Not
   dup-checked; kept as third backup.

## Saturated families avoided (read from the field, not guessed)

Alarm snoozes/quits itself (~8 lines); coffee files for overtime/divorce
(~6); inbox reproduces / 47 unread emails (~10); meeting about the
meeting / could have been an email / standup ran long (~20, the dominant
family); "would not Monday again" (~8); Monday ate the weekend (~5);
Wi-Fi/laptop died (~4). Singletons avoided as turns: support on hold
until Tuesday; weekend checked out, refund desk closed Friday; Monday as
an unapproved software update; Monday rated itself five stars; office
plant outperformed me.

## Build trials

- Trial 1 (DONE 25 Nov ~02:00 WITA): `node main.ts` wrote 81 bytes to
  /output/entry.txt; verified by reading the file back: exactly the final
  line, 81 characters, 0 newlines. Gate 1–200 chars, one line: PASS.
- Trial 2 (DONE 25 Nov ~02:00 WITA): bundle v1 + check via kit CLI: 14
  passed, 0 failed, 5 skipped, 5 at submission (incl. thinking_priced
  and thinking_revised). Bundle sha
  a89192aaed61510b7df0ed4e62609d44dc4c043ae3630fc6a94cd6ea2456737e.
- Trial 3 (README fix, post-submit): server status for submission
  01a20eb3-2e91-71d4-a86b-445abd408e47 passed repo_readme but recommended
  linking the bounty page, so README gained the
  https://make.fun/bounty/<slug> link. Re-committed, re-pushed, and
  re-submitted with the SAME bundle v1 (transcripts unchanged).
