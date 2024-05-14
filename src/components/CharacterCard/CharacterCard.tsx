import { Character } from "@/utils/Interfaces";
import { showAttribute } from "@/utils/showAttribute";
import Link from "next/link";

const CharacterCard = ({ character }: { character: Character }) => {
  const { name, eye_color, gender, img } = character;

  return (
    <Link href={`/personajes/${character.id}`}>
      <div className="mx-auto max-w-screen-lg justify-center ">
        <div className="bg-cardBg rounded-lg shadow-xl overflow-hidden mb-4 w-64 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 min-h-96">
          <div className="p-4">
            {img && (
              <img
                src={img}
                alt={`Imagen de ${name}`}
                className="object-contain w-full h-60"
              />
            )}
            <h2 className="text-text text-xl font-bold mb-2">{name}</h2>
            {showAttribute(eye_color) && (
              <p className="text-gray-400 mb-2">Color de ojos: {eye_color}</p>
            )}
            {showAttribute(gender) && (
              <p className="text-gray-400 mb-2">Género: {gender}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
