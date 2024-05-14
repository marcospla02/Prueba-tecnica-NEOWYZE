"use client";

import { GET } from "@/app/api/personajes/[characterId]";
import CharacterDetailCard from "@/components/CharacterCard/CharacterDetailCard";
import { Character } from "@/utils/Interfaces";
import { useEffect, useState } from "react";

const ChracterDetail = ({ params }: { params: { character_id: string } }) => {
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    const fetchCharacter = async () => {
      const charactersData: Character = await GET(params.character_id);

      setCharacter(charactersData);
    };

    fetchCharacter();
  }, []);

  return <CharacterDetailCard character={character} />;
};

export default ChracterDetail;
