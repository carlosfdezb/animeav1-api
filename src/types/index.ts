// Genre represents a single genre/category for an anime
export interface Genre {
  id: number;
  name: string;
  type: number;
  slug: string;
  malId: number;
}

// Category represents the type of anime (TV Anime, OVA, Movie, etc)
export interface Category {
  id: number;
  name: string;
  slug: string;
  malId: number;
}

// Episode represents a single episode of an anime
export interface Episode {
  id: number;
  number: number;
}

// Mirror represents a video mirror/server for an episode
export interface Mirror {
  server: string;
  url: string;
}

// DownloadOption represents a download option for an episode
export interface DownloadOption {
  server: string;
  url: string;
}

// EpisodeVariant represents available language variants (SUB/DUB)
export interface EpisodeVariant {
  SUB?: number;
  DUB?: number;
}

// EpisodeDetail represents full episode data from episode page
export interface EpisodeDetail {
  id: number;
  mediaId: number;
  title: string | null;
  number: number;
  season: number | null;
  relativeNumber: number | null;
  variants: EpisodeVariant;
  filler: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  embeds: {
    SUB?: Mirror[];
    DUB?: Mirror[];
  };
  downloads: {
    SUB?: DownloadOption[];
    DUB?: DownloadOption[];
  };
}

// RelatedAnime represents a related anime (prequel, sequel, etc)
export interface RelatedAnime {
  type: number;
  destination: {
    id: number;
    slug: string;
    title: string;
    startDate: string;
  };
}

// Anime represents the full anime data structure from the page
export interface Anime {
  id: number;
  categoryId: number;
  title: string;
  slug: string;
  aka: {
    "en-us"?: string;
    "ja-jp"?: string;
    [key: string]: string | undefined;
  };
  genres: Genre[];
  synopsis: string;
  poster: string | null;
  backdrop: string | null;
  trailer: string | null;
  status: number;
  statusText: "Finished" | "Upcoming" | "Airing";
  runtime: number | null;
  startDate: string;
  nextDate: string | null;
  endDate: string | null;
  waitDays: number;
  featured: boolean;
  mature: boolean;
  episodesCount: number;
  score: number;
  votes: number;
  malId: number;
  seasons: number | null;
  createdAt: string;
  updatedAt: string;
  category: Category;
  episodes: Episode[];
  relations: RelatedAnime[];
}

// CatalogOrder represents sort order options for catalog listing
export type CatalogOrder = 'score' | 'popular' | 'title' | 'latest_added' | 'latest_released';

// CatalogItem represents a single anime in the catalog listing
export interface CatalogItem {
  id: number;
  title: string;
  slug: string;
  synopsis: string;
  poster: string;
  type: string;
  typeSlug: string;
}

// CatalogResponse represents the catalog listing response
export interface CatalogResponse {
  items: CatalogItem[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// CatalogParams represents parameters for catalog listing
export interface CatalogParams {
  page?: number;
  letter?: string;
  genre?: string | string[];
  category?: string;
  minYear?: number;
  maxYear?: number;
  status?: string;
  order?: CatalogOrder;
}

// SearchParams represents search/filter parameters
export interface SearchParams {
  query?: string;
  genre?: string | string[];
  type?: string;
  year?: number;
  status?: string;
  letter?: string;
  page?: number;
  pageSize?: number;
}

// SvelteKitDataItem represents a single item in the sveltekit data array
export interface SvelteKitDataItem {
  type: string;
  data: {
    user?: unknown;
    media?: Anime;
    [key: string]: unknown;
  };
  uses?: {
    dependencies?: string[];
    params?: string[];
  };
}

// ScrapedData represents the raw data extracted from HTML
export interface ScrapedData {
  user?: unknown;
  media?: Anime;
  [key: string]: unknown;
}

// SvelteKitData represents the __sveltekit_* script data
export interface SvelteKitData {
  base: string;
  env: Record<string, string>;
}
