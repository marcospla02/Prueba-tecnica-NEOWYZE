"use client";

import { GET } from "@/app/api/personajes/[characterId]";
import BackButton from "@/components/BackButton/BackButton";
import CharacterDetailCard from "@/components/CharacterCard/CharacterDetailCard";
import { Character } from "@/utils/Interfaces";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../loading";

const ChracterDetail = ({ params }: { params: { character_id: string } }) => {
  const [character, setCharacter] = useState<Character>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      const charactersData: Character = await GET(params.character_id);

      setCharacter(charactersData);
      setLoading(false)
    };

    fetchCharacter();
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <BackButton handleGoBack={() => router.back()} />
          <CharacterDetailCard character={character} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ChracterDetail;
