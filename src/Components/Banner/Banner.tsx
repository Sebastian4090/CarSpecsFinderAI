const Banner = () => {
  return (
    <div className="w-full flex justify-center items-center bg-indigo-800 h-48 shadow-2xl select-none">
      <div className="w-9/12 sm:w-8/12 lg:w-1/2 h-24 bg-indigo-950 rounded-lg shadow-lg flex items-center">
        <h1 className="flex-auto text-2xl sm:text-4xl lg:text-4xl font-primary text-slate-200 text-center cursor-pointer">
          Car Specifications Finder
        </h1>
      </div>
    </div>
  );
};

export default Banner;
