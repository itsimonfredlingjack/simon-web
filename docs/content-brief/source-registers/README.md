# Source registers

This directory contains a local source snapshot for the website content brief. It is working material for implementation, not visitor-facing website content.

Do not move these files into `public/`. Do not render the complete CSV or Markdown tables in the frontend. Use them to verify content choices and source wording.

## Snapshot contents

Copied from:

```text
/Users/coffeedev/Documents/Codex/2026-05-14/files-mentioned-by-the-user-simon
```

Files:

- `simon_fredling_publiceringsregister.csv`
- `simon_fredling_publiceringsregister.md`
- `new_candidates.csv`
- `excluded_matches.csv`
- `search_log.md`
- `summary.md`

## Counts verified before copy

- Main publication register rows: 335.
- Main register rows with `url_status=original_url_found`: 332.
- Main register rows with `source_publication=Sveriges Television`: 329.
- Main register rows with `source_publication=Göteborgs universitet`: 6.
- Supplemental candidate rows: 56.
- Supplemental rows with `evidence_status=confirmed_original_source`: 55.
- Supplemental rows with `evidence_status=snippet_only`: 1.
- Excluded duplicate / known match rows: 15.

## Use in the website project

Use these files as evidence and audit trail. The public website should publish only:

- selected source-backed claims,
- a small number of concrete cases,
- public source URLs,
- conservative counts and qualifiers.

The public website should not publish:

- local file paths,
- the full raw register,
- excluded duplicate rows as evidence,
- uncertain candidates as confirmed findings.
