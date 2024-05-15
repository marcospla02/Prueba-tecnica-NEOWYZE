import { Character } from "@/utils/Interfaces";
import CharactersImg from "@/assets/characters-v2.png";
import axios from "axios";

export async function GET(filters?: { eye_color?: string; gender?: string }) {
  try {
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const responsePromises = pages.map(async (page) => {
      const infoUrl = await axios(`https://swapi.dev/api/people/?page=${page}`);

      return infoUrl.data.results.map((character: Character) => {
        return {
          name: character.name,
          img: CharactersImg.src,
          eye_color: character.eye_color,
          gender: character.gender,
          id: character.url && character.url.split("/").at(5),
          birthday_year: character.birthday_year,
          hair_color: character.hair_color,
          height: character.height,
          skin_color: character.skin_color,
          mass: character.mass,
        };
      });
    });

    const responses: Character[] = await Promise.all(responsePromises);
    let characters = responses.flat(); // Aplanar la matriz de matrices en una sola matriz

    // Filtrar los personajes manualmente si se proporcionan filtros
    if (filters) {
      if (filters.eye_color) {
        characters = characters.filter(
          (character) => character.eye_color === filters.eye_color
        );
      }
      if (filters.gender) {
        characters = characters.filter(
          (character) => character.gender === filters.gender
        );
      }
    }

    return new Response(JSON.stringify(characters));
  } catch (error: any) {
    return new Response(error.message);
  }
}
