import React from "react";
import Link from "next/link";
import { Films } from "@/utils/Interfaces";


const FilmCard = ({ films }: { films: Films }) => {
  return (
    <div className="bg-cardBg rounded-lg shadow-xl overflow-hidden mb-4 w-64 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <Link href={`/peliculas/${films.url?.split("/").filter(Boolean).pop()}`}>
        <img
          src={films.img}
          alt={`La imagen de ${films.title} no se encuentra disponible`}
          className="object-cover w-full h-60"
        />
        <div className="p-4">
          <h2 className="text-text text-xl font-bold mb-2">{films.title}</h2>
          <p className="text-gray-400 mb-2">Episodio: {films.episode_id}</p>
        </div>
      </Link>
    </div>
  );
};

export default FilmCard;
