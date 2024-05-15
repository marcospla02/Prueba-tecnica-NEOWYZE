"use client";
import { GET } from "@/app/api/personajes/all/route";
import { Character } from "@/utils/Interfaces";
import { useEffect, useState } from "react";

const FilterCharacters = ({
  setFilteredCharacters,
}: {
  setFilteredCharacters: (characters: Character[]) => void;
}) => {
  const [eyeColorFilter, setEyeColorFilter] = useState<string>("");
  const [genderFilter, setGenderFilter] = useState<string>("");
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      const response = await GET();
      if (response.ok) {
        const allCharactersData: Character[] = await response.json();
        setAllCharacters(allCharactersData);
      }
    };

    fetchAllCharacters();
  }, []);

  const handleEyeColorChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEyeColorFilter(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenderFilter(event.target.value);
  };

  const applyFilters = () => {
    let filteredCharacters: Character[] = allCharacters;

    if (eyeColorFilter) {
      filteredCharacters = filteredCharacters.filter(
        (character) => character.eye_color === eyeColorFilter
      );
    }

    if (genderFilter) {
      filteredCharacters = filteredCharacters.filter(
        (character) => character.gender === genderFilter
      );
    }

    if (!genderFilter && !eyeColorFilter) return setFilteredCharacters([]);

    setFilteredCharacters(filteredCharacters);
  };

  const uniqueEyeColors = allCharacters.reduce((acc: string[], character) => {
    if (!acc.includes(character.eye_color)) {
      acc.push(character.eye_color);
    }
    return acc;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="text-lg font-semibold mb-2">Filtrar Personajes</h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col">
          <label htmlFor="eyeColor" className="mb-1">
            Color de Ojos:
          </label>
          <select
            id="eyeColor"
            className="bg-gray-100 px-2 py-1 rounded-md"
            value={eyeColorFilter}
            onChange={handleEyeColorChange}
          >
            <option value="">Todos</option>
            {uniqueEyeColors.map((eyeColor) => {
              return <option value={eyeColor}>{eyeColor}</option>;
            })}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="gender" className="mb-1">
            Género:
          </label>
          <select
            id="gender"
            className="bg-gray-100 px-2 py-1 rounded-md"
            value={genderFilter}
            onChange={handleGenderChange}
          >
            <option value="">Todos</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </div>
        <button
          onClick={applyFilters}
          className="hover:bg-text hover:text-white text-black rounded focus:outline-none transition duration-300 ease-in-out font-semibold py-2 px-4"
        >
          Aplicar Filtros
        </button>
      </div>
    </div>
  );
};

export default FilterCharacters;
