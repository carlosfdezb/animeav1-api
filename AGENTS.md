# AnimeAV1 API

> Unofficial API for scraping AnimeAV1 data (SvelteKit site)

## npm Package

```bash
npm install animeav1-api
```

## API

```typescript
import { getAnime, getCatalog, searchAnime, getEpisode } from 'animeav1-api';
```

## Functions

- `getAnime(slug)` - Anime details from /media/:slug page
- `getCatalog(params)` - Catalog listing with filters
- `searchAnime(query)` - Search by title
- `getEpisode(slug, number)` - Episode with mirrors and downloads

## Tech Notes

- Site is SvelteKit - data embedded in `kit.start()` call as JS object
- Scraping: fetch HTML, extract `data: [...]` array, convert to JSON
- Poster/backdrop URLs: `https://cdn.animeav1.com/{covers,backdrops}/{id}.jpg`
- Synopsis: cleaned (quotes, newlines normalized)
- Status: 0=Finished, 1=Upcoming, 2=Airing

## Disclaimer

This package is not affiliated with AnimeAV1. Use at your own risk.
