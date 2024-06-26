import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../../Spinner.gif";

const CarHeader = () => {
  const location = useLocation();
  const { brand, model, gen, engine } = location.state;
  const [image, setImage] = useState<string>("");

  let genRefactor: string = gen.name.includes("/")
    ? gen.name.substring(0, gen.name.indexOf("/"))
    : gen.name;

  useEffect(() => {
    const getImage = async (): Promise<void> => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_IMAGE}/${brand.name}%20${model.name}%20${genRefactor}`
        );
        const data = await response.json();
        setImage(data);
      } catch (err) {
        setImage("error");
        console.error("Error fetching image" + err);
      }
    };

    getImage();
  }, []);

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col md:flex-row w-11/12 md:w-9/12 lg:w-7/12 h-full m-5 p-5 border rounded-md shadow-lg bg-white">
        <div className="flex flex-col justify-center items-center w-full md:w-2/4 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl text-center font-primary">
          <h1>{brand.name}</h1>
          <h1>{model.name}</h1>
          <h1>{gen.name}</h1>
          <h1>{engine.name}</h1>
        </div>
        <div className="flex justify-center items-center mt-5 md:mt-0 md:w-2/4">
          {image && image !== "error" ? (
            <img
              src={image}
              className="w-full h-auto shadow-md rounded-lg"
              alt="car_image"
              aria-label={`${brand.name} ${model.name} ${gen.name} image`}
            />
          ) : image === "error" ? (
            <h1 className="flex text-center font-primary text-xl">
              Error fetching image
            </h1>
          ) : (
            <img src={Spinner} alt="Loading..." aria-label="Please wait" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CarHeader;
