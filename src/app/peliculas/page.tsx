"use client"
import FilmCard from "@/components/FilmCard/FilmCard";
import { Films } from "@/utils/Interfaces";
import { useEffect, useState } from "react";
import { GET } from "../api/peliculas/route";

const Movies = () => {
  const [films, setFilms] = useState<Films[]>([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const filmsData = await GET();

      filmsData?.length && setFilms(filmsData);
    };

    fetchFilms();
  }, []);

  return (
      <div className="flex flex-wrap justify-start">
        {films.map((film, index) => (
          <div key={index} className="m-4">
            <FilmCard films={film} />
          </div>
        ))}
      </div>
  );
};

export default Movies;
