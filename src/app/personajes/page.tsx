"use client";
import { useState, useEffect } from "react";
import { Character } from "@/utils/Interfaces";
import { GET } from "../api/personajes/route";
import CharacterCard from "@/components/CharacterCard/CharacterCard";
import Paginated from "@/components/Paginated/Paginated";

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      const charactersData = await GET();
      if (charactersData) {
        setCharacters(charactersData.characters);
        setNextPage(charactersData.next);
        setPrevPage(charactersData.previous);
      }
    };

    fetchCharacters();
  }, []);

  const handleNextPage = async () => {
    if (nextPage) {
      const charactersDataNext = await GET(nextPage);
      if (charactersDataNext) {
        setCharacters(charactersDataNext?.characters);
        setNextPage(charactersDataNext.next);
        setPrevPage(charactersDataNext.previous);
        setCurrentPage((prev) => prev + 1);
      }
    }
  };

  const handlePrevPage = async () => {
    if (prevPage) {
      const charactersDataPrev = await GET(prevPage);
      if (charactersDataPrev) {
        setCharacters(charactersDataPrev?.characters);
        setNextPage(charactersDataPrev.next);
        setPrevPage(charactersDataPrev.previous);
        setCurrentPage((prev) => prev - 1);
      }
    }
  };

  return (
    <div>
      <Paginated
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-10 mx-auto max-w-screen-lg justify-center">
        {characters.map((character: Character) => (
          <CharacterCard character={character} key={character.id}  />
        ))}
      </div>
      <Paginated
        prevPage={prevPage}
        nextPage={nextPage}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
};

export default Characters;
