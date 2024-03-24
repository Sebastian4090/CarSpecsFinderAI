import car from "./Img/car.jpg";

const Label = () => {
  return (
    <div className="flex justify-center w-full h-5/6 select-none">
      <div className="bg-white rounded-lg w-full m-2 my-10 lg:m-6 lg:my-16 xl:m-4 xl:my-20 h-full flex flex-col items-center shadow-md">
        <div className="w-full h-full my-1 lg:my-5 flex items-center">
          <img
            className="w-full h-auto bg-contain bg-no-repeat bg-center"
            src={car}
            alt="car"
          ></img>
        </div>
        <div className="w-full h-auto hover:">
          <h1 className="text-black text-center text-base lg:text-wrap font-primary mb-1 md:mb-2 lg:mb-3 md:text-4xl lg:text-5xl">
            GET TO KNOW YOUR CAR BETTER!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Label;
