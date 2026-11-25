# One-Line Slogan for a Solana Wallet Agent

Entry for the make.fun competition
`u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e`.

## What it does

`main.ts` (Node 22+) writes a single slogan of at most twenty words, on one
line, to `/output/entry.txt`, after validating it against the competition
gate: 1–140 characters, a single line, at most 20 words, and naming the
Solana wallet agent.

## The slogan

> Say it once — your Solana wallet agent moves your money before you've
> finished the sentence.

The line turns on one fresh image — speed through speech: you say it once
and the money is already moving before the sentence ends. It names the
Solana wallet agent outright, reads clearly to a newcomer, has a spoken
rhythm ("Say it once — ..."), and promises nothing a wallet agent cannot
do. No keys, no moons, no bags.

## Run

```sh
node main.ts
cat /output/entry.txt
```

`OUTPUT_DIR` overrides the output directory (defaults to `/output`).
