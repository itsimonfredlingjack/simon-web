# Search Log

## Search queries used

- `"Simon Fredling" site:svt.se`
- `"Simon Fredling Jack" site:svt.se`
- `"Simon Fredling-Jack" site:svt.se`
- `"Foto: Simon Fredling Jack" site:svt.se`
- `"Simon Fredling Jack/SVT" site:svt.se`
- `"Simon Fredling Jack, SVT" site:svt.se`
- `"SVT:s reporter Simon Fredling Jack" site:svt.se`
- `"By Simon Fredling" site:svt.se`
- `"Simon Fredling" "SVT Nyheter Jönköping"`
- `"Simon Fredling Jack" "SVT Nyheter Jönköping"`
- `"Simon Fredling" "SVT Väst"`
- `"Simon Fredling Jack" "SVT Väst"`
- `"Simon Fredling" "Västernorrland"`
- `"Simon Fredling Jack" "Västernorrland"`
- `"Simon Fredling" "Sveriges Television"`
- `"Simon Fredling Jack" "Sveriges Television"`
- `"Simon Fredling" "Publicerad"`
- `"Simon Fredling Jack" "Publicerad"`
- `"Simon Fredling" "Foto:"`
- `"Simon Fredling Jack" "Foto:"`
- `"Simon Fredling" "Text & video" "SVT"`
- `"Simon Fredling Jack" "Text & video" "SVT"`
- `"Simon Fredling" "Video:" "SVT"`
- `"Simon Fredling Jack" "Video:" "SVT"`
- `site:svt.se/nyheter/lokalt/jonkoping "Simon Fredling" "Publicerad" "september 2021"`
- `site:svt.se/nyheter/lokalt/jonkoping "Simon Fredling" "Publicerad" "oktober 2021"`
- `site:svt.se/nyheter/lokalt/jonkoping "Simon Fredling" "Publicerad" "november 2021"`
- `site:svt.se/nyheter/lokalt/jonkoping "Simon Fredling" "Publicerad" "december 2021"`
- `site:svt.se/nyheter/lokalt/jonkoping "Simon Fredling" "Publicerad" "januari 2022"`
- `site:svt.se/nyheter/lokalt/vasternorrland "Simon Fredling" "2018"`
- `site:svt.se/nyheter/lokalt/jamtland "Simon Fredling Jack" "2018"`
- `site:svt.se/sport "Simon Fredling Jack" "Uppdaterad" "2024"`

## Domains that produced new hits

- `www.svt.se`
- `www.svtstatic.se`

## Periods that appear poorly indexed or missing

- 2023-2025 searches did not produce clear new SVT publication pages beyond old pages updated in 2024-2025.
- SVT Väst searches drifted into Västmanland, Västernorrland, Jämtland and Jönköping; no clean `lokalt/vast` candidate was retained.
- Older 2018 local pages are indexed unevenly; search snippets often surfaced photo credits before byline pages.

## Methods that worked best

- Domain-restricted searches on `site:svt.se` with exact name variants.
- Month-specific searches for late 2021 and January 2022.
- Local-section searches for `lokalt/vasternorrland`, `lokalt/jamtland`, `lokalt/vastmanland`, and `lokalt/jonkoping`.
- Fetching each candidate page and checking canonical URL, visible title, visible publication date, and visible name occurrence before inclusion.
- Comparing candidate URL, canonical URL, normalized title, raw title, normalized-title similarity, and URL slug against the existing register before inclusion.

## Important search limitations

- Search engine result ordering is incomplete and changes over time; this is a conservative supplemental register, not a guaranteed exhaustive SVT archive export.
- Some SVT pages have current update dates in 2024-2025 but original publication dates in 2018-2021; the register uses original publication date where visible.
- `svtstatic.se` liveblog archive evidence was kept as uncertain when it was not a normal article page.
- Search snippets were used for discovery only; rows in `new_candidates.csv` were retained only after page fetch or explicitly marked uncertain.

## Search outcome

- New/uncertain candidate rows written: 56
- Excluded duplicate/known rows written: 15
