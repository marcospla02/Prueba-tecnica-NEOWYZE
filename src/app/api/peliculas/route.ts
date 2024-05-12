import { Films } from "@/utils/Interfaces";
import axios from "axios";
import Movie from "@/assets/main-film-v3.jpeg";

export async function GET() {
  try {
    const url = "https://swapi.dev/api/films";

    const infoUrl = await axios(url);

    const films: Films[] = infoUrl.data.results.map((film: Films) => {
      return {
        title: film.title,
        episode_id: film.episode_id,
        director: film.director,
        characters: film.characters,
        url: film.url,
        img: Movie.src,
      };
    });

    return films;
  } catch (error: any) {
    console.log({ Message: error.message });
  }
}
