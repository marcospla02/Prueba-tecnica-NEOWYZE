"use client";
import { GET } from "@/app/api/peliculas/[filmId]";
import BackButton from "@/components/BackButton/BackButton";
import FilmDetailCard from "@/components/FilmCard/FilmDetailCard";
import { Films } from "@/utils/Interfaces";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MoveisDetail = ({ params }: { params: { episode_id: string } }) => {
  const [films, setFilms] = useState<Films>();
  const router = useRouter();

  useEffect(() => {
    const fetchFilms = async () => {
      const filmsData = await GET(params.episode_id);

      setFilms(filmsData);
    };

    fetchFilms();
  }, []);

  return (
    <>
      <BackButton handleGoBack={() => router.back()} />

      <FilmDetailCard film={films} />
    </>
  );
};

export default MoveisDetail;
