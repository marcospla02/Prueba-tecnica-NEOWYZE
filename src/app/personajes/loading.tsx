const Loading = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="w-24 h-24 border-t-4 border-b-4 border-gray-300 rounded-full animate-spin"></div>
      <p className="ml-4 text-white">Cargando...</p>
    </div>
  );
};

export default Loading;