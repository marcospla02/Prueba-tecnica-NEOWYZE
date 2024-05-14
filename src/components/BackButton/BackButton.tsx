const BackButton = ({ handleGoBack }: { handleGoBack: () => void }) => {
  return (
    <button
      onClick={handleGoBack}
      className="flex items-center text-gray-600 hover:text-gray-800 mb-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.707 3.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7z"
          clipRule="evenodd"
        />
      </svg>
      Volver
    </button>
  );
};

export default BackButton;
