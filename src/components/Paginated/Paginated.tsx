const Paginated = ({
  prevPage,
  handlePrevPage,
  currentPage,
  nextPage,
  handleNextPage,
}: any) => {
  return (
    <div className="flex justify-center mt-8 mb-8">
      <button
        className={` hover:bg-text hover:text-white text-black font-bold py-2 px-4 rounded focus:outline-none transition duration-300 ease-in-out ${
          !prevPage && "opacity-50 cursor-not-allowed"
        }`}
        onClick={handlePrevPage}
        disabled={!prevPage}
      >
        {"<<"}
      </button>
      <span className="flex items-center text-text font-bold py-2 px-4">
        {currentPage}
      </span>
      <button
        className={` hover:bg-text hover:text-white text-black transition duration-300 ease-in-out  font-bold py-2 px-4 rounded focus:outline-none ${
          !nextPage && "opacity-50 cursor-not-allowed"
        }`}
        onClick={handleNextPage}
        disabled={!nextPage}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Paginated;
