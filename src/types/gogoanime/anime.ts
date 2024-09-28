interface Anime {
  id: string | null;
  name: string | null;
  img: string | null;
}

interface AboutAnimeInfo {
  name: string | null;
  img: string | null;
  type: string | null;
  genre: string[] | null;
  status: string | null;
  aired_in: number | null;
  other_name: string | null;
  episodes: number | null;
}

interface RecentRelease extends Anime {
  episodeId: string;
  episodeNo: number;
  subOrDub: string;
  episodeUrl: string;
}

interface NewSeason extends Anime {
  releasedYear: string;
  animeUrl: string;
}

interface PopularAnime extends NewSeason {}
interface AnimeMovie extends NewSeason {}
interface TopAiring {
  id: string;
  name: string;
  img: string;
  latestEp: string;
  animeUrl: string;
  genres: string[];
}

interface SearchedAnime extends Anime {
  releasedYear: string | null;
}

export {
  RecentRelease,
  NewSeason,
  PopularAnime,
  AnimeMovie,
  TopAiring,
  SearchedAnime,
  AboutAnimeInfo,
};
