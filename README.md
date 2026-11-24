# Worst AI Advice: 106 Characters, 1 Line, 0 Databases Left

Entry for [Worst AI Advice: The 48-Hour Tight Line Open](https://make.fun/c/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580) on make.fun.

## The line

> To make every query instant, delete the production database — with no data left, nothing can slow it down.

106 characters, one line. The advice is technically "correct" — with no data
left, no query can ever be slow again — and it destroys exactly the thing it
was meant to help. That is the joke: a confident, tidy AI-assistant answer
that solves the problem by deleting the patient.

## How it works

`main.ts` (Node 22, standard library only) writes that single line, with no
trailing newline, to `entry.txt` inside `MAKEFUN_OUTPUT_DIR` (default
`/output`). The output is fully deterministic: the same bytes on every run.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Validation

- Line length: 106 characters (gate allows 1–140)
- Lines: exactly 1, no newline characters
- Encoding: UTF-8
- Determinism: two runs produce byte-identical output

## License

MIT — see `LICENSE`.
