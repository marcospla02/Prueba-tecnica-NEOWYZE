import { Character } from "@/utils/Interfaces";
import { showAttribute } from "@/utils/showAttribute";
import Characters from "@/assets/characters-v2.png";

const CharacterDetailCard = ({
  character,
}: {
  character: Character | undefined;
}) => {
  return (
    <div className="bg-cardBg rounded-lg shadow-xl overflow-hidden mb-4 w-full lg:flex">
      <div className="lg:w-1/2">
        <img
          src={Characters.src}
          alt={`Imagen de ${character?.name}`}
          className="object-contain w-full h-80 lg:h-80 rounded-br-lg"
        />
      </div>
      <div className="lg:w-1/2 p-4">
        <h2 className="text-text text-xl font-bold mb-4">{character?.name}</h2>
        {showAttribute(character?.eye_color) && (
          <p className="text-gray-400 mb-2">
            Color de ojos: {character?.eye_color}
          </p>
        )}
        {showAttribute(character?.gender) && (
          <p className="text-gray-400 mb-2">Género: {character?.gender}</p>
        )}
        {showAttribute(character?.birthday_year) && (
          <p className="text-gray-400 mb-2">
            Año de cumpleaños: {character?.birthday_year}
          </p>
        )}
        {showAttribute(character?.hair_color) && (
          <p className="text-gray-400 mb-2">
            Color de pelo: {character?.hair_color}
          </p>
        )}
        {showAttribute(character?.height) && (
          <p className="text-gray-400 mb-2">Altura: {character?.height}</p>
        )}
        {showAttribute(character?.skin_color) && (
          <p className="text-gray-400 mb-2">
            Color de piel: {character?.skin_color}
          </p>
        )}
        {showAttribute(character?.mass) && (
          <p className="text-gray-400 mb-2">Masa: {character?.mass}</p>
        )}
      </div>
    </div>
  );
};

export default CharacterDetailCard;
