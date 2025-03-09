const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-7xl dark:text-white text-black ">
        404 , page not found ...
      </h1>
      <button className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a href="/">Home</a>
      </button>
    </div>
  );
};
export default NotFound;
