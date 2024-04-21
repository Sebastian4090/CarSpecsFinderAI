import { useEffect, useState, useRef, Dispatch } from "react";
import { Link } from "react-router-dom";
import downArrow from "../../down-arrow.svg";
import Dropdown from "../Dropdown/Dropdown";

const Data = async (
  type: string,
  set?: Dispatch<React.SetStateAction<string[]>>,
  id?: string
): Promise<void> => {
  try {
    let readyType: string;
    if (type.includes("/")) {
      // refactor type for fetching
      readyType = type.split("/").join("=");
    } else {
      readyType = type;
    }

    const response = await fetch(
      `http://localhost:3000/data/${id}/${readyType}`
    );

    if (!response.ok) {
      throw new Error(`Error status ${response.status}`);
    }

    const data = await response.json();
    if (set) {
      set(data);
    }
  } catch (error) {
    console.error("ERROR: ", error);
  }
};

const Form = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropNum, setDropNum] = useState<number>(0);

  const [brand, setBrand] = useState<{
    name: string;
    index?: number;
  }>({
    name: "Brands",
    index: 0,
  });
  const [brandList, setBrandList] = useState<string[]>([]);

  const [model, setModel] = useState<{
    name: string;
    index?: number;
  }>({
    name: "Model",
    index: 1,
  });
  const [modelList, setModelList] = useState<string[]>([]);

  const [gen, setGen] = useState<{ name: string; index?: number }>({
    name: "Generation",
    index: 2,
  });
  const [genList, setGenList] = useState<string[]>([]);

  const [engine, setEngine] = useState<{
    name: string;
    index?: number;
  }>({
    name: "Engine",
    index: 3,
  });
  const [engineList, setEngineList] = useState<string[]>([]);

  let dropRef = useRef<HTMLInputElement>(null);

  // close dropdown on clicking away + fetch brand data
  useEffect(() => {
    let handler = (e: Event) => {
      if (!dropRef.current?.contains(e.target as HTMLButtonElement)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    Data("Brands", setBrandList, "65f046a87e9d5263e088681c");

    return () => {
      document.removeEventListener("mousedown", handler);
      Data("Brands", setBrandList, "65f046a87e9d5263e088681c");
    };
  }, []);

  const changeHandler = (
    set?: Dispatch<React.SetStateAction<{ name: string; index?: number }>>,
    value?: string
  ) => {
    set ? set((prevValues: object) => ({ ...prevValues, name: value })) : null;
  };

  const resetState = (id?: number) => {
    switch (id) {
      case 0:
        changeHandler(setModel, "Model");
        setModelList([]);
        changeHandler(setGen, "Generation");
        setGenList([]);
        changeHandler(setEngine, "Engine");
        setEngineList([]);
        break;
      case 1:
        changeHandler(setGen, "Generation");
        setGenList([]);
        changeHandler(setEngine, "Engine");
        setEngineList([]);
        break;
      case 2:
        changeHandler(setEngine, "Engine");
        setEngineList([]);
        break;
    }
  };

  return (
    <section className="flex justify-center font-sans h-full w-full mb-40 2xl:mb-60">
      <div className="w-full m-5 bg-slate-200 p-6 rounded-lg flex flex-col shadow-md">
        <div className="w-full">
          <h1 className="font-primary text-black text-4xl text-center select-none">
            Choose a Manufactuer, Model, Generation and Engine!
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row justify-center gap-x-20 gap-y-10 xl:gap-y-0 pt-10">
          <div
            className="relative flex justify-center"
            id="dropdownButton"
            ref={dropNum === 1 ? dropRef : null}
          >
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setDropNum(1);
              }}
              id="button"
              aria-label="Choose Brand"
              className="h-12 w-64 xl:w-60 2xl:w-80 2xl:h-20 text-black rounded-md text-lg 2xl:text-2xl font-primary 
                            outline-1 flex justify-between p-2 items-center cursor-pointer bg-white"
            >
              {brand.name}
              <img src={downArrow} alt="arrow" className="w-5 h-auto pl-2" />
            </button>
            {isOpen && dropNum === 1 ? (
              <Dropdown
                data={brandList}
                DataFetch={Data}
                ObjectId={"65f046b17e9d5263e088681d"}
                nextState={setModelList}
                set={setBrand}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                handler={changeHandler}
                resetState={resetState}
                index={brand.index}
              />
            ) : null}
          </div>
          <div
            className="relative flex justify-center"
            id="dropdownButton"
            ref={dropNum === 2 ? dropRef : null}
          >
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setDropNum(2);
              }}
              id="button"
              aria-label="Choose Model"
              className="h-12 w-64 xl:w-60 2xl:w-80 2xl:h-20 text-black 
                        rounded-sm text-lg 2xl:text-2xl font-primary bg-white 
                        outline-1 flex justify-between p-2 items-center cursor-pointer"
            >
              {model.name}
              <img src={downArrow} alt="arrow" className="w-5 h-auto pl-2" />
            </button>
            {isOpen && dropNum === 2 ? (
              <Dropdown
                data={modelList}
                DataFetch={Data}
                ObjectId={"65fc073c0da0ac1bc6ed760a"}
                nextState={setGenList}
                set={setModel}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                handler={changeHandler}
                resetState={resetState}
                index={model.index}
              />
            ) : null}
          </div>
          <div
            className="relative flex justify-center"
            id="dropdownButton"
            ref={dropNum === 3 ? dropRef : null}
          >
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setDropNum(3);
              }}
              id="button"
              aria-label="Choose Generation"
              className="h-12 w-64 xl:w-60 2xl:w-80 2xl:h-20 text-black 
                        rounded-sm text-lg 2xl:text-2xl font-primary bg-white 
                        outline-1 flex justify-between p-2 items-center cursor-pointer"
            >
              {gen.name}
              <img src={downArrow} alt="arrow" className="w-5 h-auto pl-2" />
            </button>
            {isOpen && dropNum === 3 ? (
              <Dropdown
                data={genList}
                DataFetch={Data}
                ObjectId={"660fec83e7743b15665b0989"}
                nextState={setEngineList}
                set={setGen}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                handler={changeHandler}
                resetState={resetState}
                index={gen.index}
                additionalInfo={model.name}
              />
            ) : null}
          </div>
          <div
            className="relative flex justify-center"
            id="dropdownButton"
            ref={dropNum === 4 ? dropRef : null}
          >
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setDropNum(4);
              }}
              id="button"
              aria-label="Choose Engine"
              className="h-12 w-64 xl:w-60 2xl:w-80 2xl:h-20 text-black 
                        rounded-sm text-lg 2xl:text-2xl font-primary bg-white 
                        outline-1 flex justify-between p-2 items-center cursor-pointer"
            >
              {engine.name}
              <img src={downArrow} alt="arrow" className="w-5 h-auto pl-2" />
            </button>
            {isOpen && dropNum === 4 ? (
              <Dropdown
                data={engineList}
                set={setEngine}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                handler={changeHandler}
                resetState={resetState}
                index={engine.index}
              />
            ) : null}
          </div>
        </div>
        {engine.name !== "Engine" ? (
          <div className="h-full flex justify-center items-end py-10 pointer-events-none">
            <Link
              className="flex justify-center"
              to="/GetCar"
              state={{ brand: brand, model: model, gen: gen, engine: engine }}
            >
              <button
                className=" bg-indigo-500 p-6 xl:p-8 rounded-md shadow-md text-center 
                            cursor-pointer hover:bg-indigo-600 active:bg-indigo-700 active pointer-events-auto"
                aria-label="Get Specs"
              >
                <p className="font-primary text-4xl">GET SPECS</p>
              </button>
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Form;
