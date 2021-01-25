import { Planet } from "./planet";

export interface Film {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    planets: string[];
    planets_info: Planet[];
  }