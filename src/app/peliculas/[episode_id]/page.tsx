"use client";
import { GET } from "@/app/api/peliculas/[filmId]";
import FilmDetailCard from "@/components/FilmCard/FilmDetailCard";
import { Films } from "@/utils/Interfaces";
import { useEffect, useState } from "react";

const MoveisDetail = ({ params }: { params: { episode_id: string } }) => {
  const [films, setFilms] = useState<Films>();

  useEffect(() => {
    const fetchFilms = async () => {
      const filmsData = await GET(params.episode_id);

      setFilms(filmsData);
    };

    fetchFilms();
  }, []);

  return <FilmDetailCard film={films} />;
};

export default MoveisDetail;
