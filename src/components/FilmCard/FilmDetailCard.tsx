"use client";
import { GET } from "@/app/api/personajes/[characterId]";
import Movie from "@/assets/main-film-v3.jpeg";
import { Character, Films } from "@/utils/Interfaces";
import Link from "next/link";
import { useEffect, useState } from "react";
import Characters from "@/assets/characters-v2.png";


const FilmDetailCard = ({ film }: { film: Films | undefined }) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      if (!film) return;

      const characterPromises = film.characters.map(
        async (characterUrl: string) => {
          const characterId = characterUrl.split("/").at(5);
          return characterId && (await GET(characterId));
        }
      );

      const charactersData = await Promise.all(characterPromises);

      setCharacters(charactersData);
    };

    fetchCharacters();
  }, [film]);

  const handleClick = async (id: string) => {
    try {
      return await GET(id);
    } catch (error) {
      console.error("Error al obtener los detalles del personaje:", error);
    }
  };

  return (
    <div className="bg-cardBg rounded-lg shadow-xl overflow-hidden mb-4 w-full lg:flex">
      <div className="lg:w-1/2">
        <img
          src={film?.title && Movie.src}
          alt={`La imagen de ${film?.title} no se encuentra disponible`}
          className="object-cover w-full  h-auto lg:h-auto rounded-br-lg"
        />
        <div className="p-4">
          <h2 className="text-text text-xl font-bold mb-4">{film?.title}</h2>
          <p className="text-gray-400 mb-2">
            <span className="text-black font-semibold">
              Número de episodio:{" "}
            </span>
            {film?.episode_id}
          </p>
          <p className="text-gray-400 mb-2">
            <span className="text-black font-semibold">Director: </span>
            {film?.director}
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 p-4">
        <h2 className="text-black font-bold mb-2">Personajes:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters?.map((character) => (
            <div
              key={character.url}
              className="text-black flex flex-col items-center"
              onClick={() =>
                handleClick(
                  (character?.url && character.url?.split("/").at(5)) || ""
                )
              }
            >
              <Link href={`/personajes/${character.url?.split("/").at(5)}`}>
                <img
                  src={Characters.src}
                  alt="Imagen generica personaje"
                  className="size-12 rounded-full mb-2"
                />
              </Link>
              <p className="font-semibold text-center">{character.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmDetailCard;
