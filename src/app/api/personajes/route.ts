import axios from "axios";
import Characters from "@/assets/characters-v2.png";
import { Character } from "@/utils/Interfaces";

// Personajes.
export async function GET(url: string = "https://swapi.dev/api/people") {
  try {    
    const infoUrl = await axios(url);

    const characters: Character[] = infoUrl.data.results.map(
      (character: Character) => {
        return {
          name: character.name,
          img: Characters.src,
          eye_color: character.eye_color,
          gender: character.gender,
          id: character.url && character.url.split("/").at(5),
          birthday_year: character.birthday_year,
          hair_color: character.hair_color,
          height: character.height,
          skin_color: character.skin_color,
          mass: character.mass,
        };
      }
    );

    return {
      characters: characters,
      next: infoUrl.data.next,
      previous: infoUrl.data.previous,
    };
  } catch (error: any) {
    console.log({ Message: error.message });
    return null;
  }
}
