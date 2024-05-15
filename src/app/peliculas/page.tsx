"use client";
import FilmCard from "@/components/FilmCard/FilmCard";
import { Films } from "@/utils/Interfaces";
import { useEffect, useState } from "react";
import { GET } from "../api/peliculas/route";
import Loading from "./loading";

const Movies = () => {
  const [films, setFilms] = useState<Films[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      const filmsData = await GET();

      filmsData?.length && setFilms(filmsData);
      setLoading(false)
    };

    fetchFilms();
  }, []);

  return (
    <>
      {" "}
      {!loading ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-10 mx-auto max-w-screen-lg justify-center">
          {films.map((film, index) => (
            <div key={index} className="m-4">
              <FilmCard films={film} />
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Movies;
