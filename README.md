# Funniest Autocorrect Fail

[![make.fun](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![Rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/toirant/u-zeroxfive-funniest-autocorrect-fail-ddf82154/rank.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![Reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/toirant/u-zeroxfive-funniest-autocorrect-fail-ddf82154/reward.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)

A [make.fun](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154) entry for the **Funniest Autocorrect Fail** bounty ($2, free entry).

## The entry

> I texted my boss 'I'll be there in 10 minutes' but autocorrect sent 'I'll be there in 10 minions' — now the whole office thinks I'm bringing backup.

One line, under 200 characters: a text to the boss where "minutes" autocorrects to "minions".

## How it works

`main.ts` (Node 22+) validates the line — 1–199 characters, a single line, not only whitespace — creates `/output` if needed, writes it to `/output/entry.txt`, then reads the file back and verifies it matches byte for byte.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
