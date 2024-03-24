import { useEffect, useState, useRef, Dispatch } from "react";
import { Link } from "react-router-dom";
import downArrow from "./Img/down-arrow.svg";
import Dropdown from "../Dropdown/Dropdown";

const Data = async (
  type: string,
  set: Dispatch<React.SetStateAction<string[]>> | undefined,
  id: string | undefined
): Promise<void> => {
  const response = await fetch(`http://localhost:3000/data/${id}/${type}`);
  const data: any = await response.json();
  if (set) {
    set(data);
  }
};

const Form = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropNum, setDropNum] = useState<number>(0);

  const [brand, setBrand] = useState<{
    name: string;
    index: number | undefined;
  }>({
    name: "Brands",
    index: 0,
  });
  const [brandList, setBrandList] = useState<string[]>([]);

  const [model, setModel] = useState<{
    name: string;
    index: number | undefined;
  }>({
    name: "Model",
    index: 1,
  });
  const [modelList, setModelList] = useState<string[]>([]);

  const [gen, setGen] = useState<{ name: string; index: number | undefined }>({
    name: "Generation",
    index: 2,
  });
  const [genList, setGenList] = useState<string[]>([]);

  const [engine, setEngine] = useState<{
    name: string;
    index: number | undefined;
  }>({
    name: "Engine",
    index: 3,
  });
  const [engineList, setEngineList] = useState<string[]>(["1.6", "2.0"]); //for testing purposes

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
    set:
      | Dispatch<
          React.SetStateAction<{ name: string; index: number | undefined }>
        >
      | undefined,
    value: string
  ) => {
    set((prevValues: object) => ({ ...prevValues, name: value }));
  };

  const resetState = (id: number | undefined) => {
    switch (id) {
      case 0:
        changeHandler(setModel, "Model");
        setModelList([]);
        changeHandler(setGen, "Generation");
        setGenList([]);
        changeHandler(setEngine, "Engine");
        setEngineList(["1.6", "2.0"]);
        break;
      case 1:
        changeHandler(setGen, "Generation");
        setGenList([]);
        changeHandler(setEngine, "Engine");
        setEngineList(["1.6", "2.0"]);
        break;
      case 2:
        changeHandler(setEngine, "Engine");
        setEngineList(["1.6", "2.0"]);
        break;
    }
  };

  return (
    <div className="flex justify-center font-sans h-full w-full mb-40">
      <div className="w-full m-5 bg-slate-200 p-6 rounded-lg flex flex-col shadow-md">
        <div className="w-full">
          <h1 className="font-primary text-black text-4xl text-center">
            Choose a Manufactuer, Model, Generation and Engine!
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row justify-center gap-x-20 gap-y-10 xl:gap-y-0 pt-10">
          <div
            className="relative select-none flex justify-center"
            id="dropdownButton"
            ref={dropNum === 1 ? dropRef : null}
          >
            <div
              onClick={(e) => {
                setIsOpen(!isOpen);
                setDropNum(1);
              }}
              id="button"
              className="h-12 w-64 xl:w-60 text-black rounded-sm text-xl font-primary outline 
                            outline-1 flex justify-between p-2 items-center cursor-pointer"
            >
              {brand.name}
              <img src={downArrow} className="w-5 h-auto pl-2" />
            </div>
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
            className="relative select-none flex justify-center"
            id="dropdownButton"
            ref={dropNum === 2 ? dropRef : null}
          >
            <div
              onClick={() => {
                setIsOpen(!isOpen);
                setDropNum(2);
              }}
              id="button"
              className="h-12 w-64 xl:w-60 text-black 
                        rounded-sm text-xl font-primary outline 
                        outline-1 flex justify-between p-2 items-center cursor-pointer"
            >
              {model.name}
              <img src={downArrow} className="w-5 h-auto pl-2" />
            </div>
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
            className="relative select-none flex justify-center"
            id="dropdownButton"
            ref={dropNum === 3 ? dropRef : null}
          >
            <div
              onClick={() => {
                setIsOpen(!isOpen);
                setDropNum(3);
              }}
              id="button"
              className="h-12 w-64 xl:w-60 text-black 
                        rounded-sm text-xl font-primary outline 
                        outline-1 flex justify-between p-2 items-center cursor-pointer"
            >
              {gen.name}
              <img src={downArrow} className="w-5 h-auto pl-2" />
            </div>
            {isOpen && dropNum === 3 ? (
              <Dropdown
                data={genList}
                DataFetch={undefined}
                ObjectId={"65fc073c0da0ac1bc6ed760a"}
                nextState={setEngineList}
                set={setGen}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                handler={changeHandler}
                resetState={resetState}
                index={gen.index}
              />
            ) : null}
          </div>
          <div
            className="relative select-none flex justify-center"
            id="dropdownButton"
            ref={dropNum === 4 ? dropRef : null}
          >
            <div
              onClick={() => {
                setIsOpen(!isOpen);
                setDropNum(4);
              }}
              id="button"
              className="h-12 w-64 xl:w-60 text-black 
                        rounded-sm text-xl font-primary outline 
                        outline-1 flex justify-between p-2 items-center cursor-pointer"
            >
              {engine.name}
              <img src={downArrow} className="w-5 h-auto pl-2" />
            </div>
            {isOpen && dropNum === 4 ? (
              <Dropdown
                data={engineList}
                DataFetch={undefined}
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
            <Link className="w-11/12 md:w-7/12 lg:w-5/12" to="/GetCar">
              <div
                className=" bg-indigo-500 p-6 rounded-md shadow-md text-center 
                            cursor-pointer hover:bg-indigo-600 active:bg-indigo-700 active select-none pointer-events-auto"
              >
                <p className="font-primary text-4xl">GET SPECS</p>
              </div>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Form;
