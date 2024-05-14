"use client"
import { Character } from "@/utils/Interfaces";
import { GET } from "../api/personajes/route";
import { useEffect, useState } from "react";
import CharacterCard from "@/components/CharacterCard/CharacterCard";

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacter = async () => {
      const charactersData = await GET();

      charactersData?.length && setCharacters(charactersData);
    };

    fetchCharacter();
  }, []);
  

  return (
    <>
      {characters.map((character: Character) => {
        return (
          <CharacterCard
            character={character}
            key={character.id}
          />
        );
      })}
    </>
  );
};

export default Characters;
