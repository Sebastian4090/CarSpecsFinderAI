import { useState, Dispatch } from "react";
import { useLocation } from "react-router-dom";
import CarSpecsData from "../CarSpecsData/CarSpecsData";
import ReturnTopButton from "../ReturnTopButton/ReturnTopButton";
import Arrow from "../../down-arrow.svg";

const specsFetch = async (
  set: Dispatch<React.SetStateAction<string[]>>,
  dropNum: Number,
  car: any
) => {
  let userPrompt: string = "";

  switch (dropNum) {
    case 1:
      userPrompt = `Give me engine specifications of ${car}`;
      break;
    case 2:
      userPrompt = `Give me suspension specifications of ${car}`;
      break;
    case 3:
      userPrompt = `Give me size and dimensions of ${car}`;
      break;
    case 4:
      userPrompt = `Give me fuel consumption of ${car}`;
      break;
    case 5:
      userPrompt = `Give me transmission specifications of ${car}`;
      break;
    case 6:
      userPrompt = `Give me common problems of ${car}`;
      break;
  }

  if (userPrompt) {
    try {
      let response = await fetch(import.meta.env.VITE_REACT_APP_SPECS, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userPrompt: userPrompt,
        }),
      });
      const data = await response.json();
      const json_data = JSON.parse(data);
      if (json_data) {
        set(json_data);
      }
    } catch (error) {
      console.error("ERROR: ", error);
    }
  }
};

const CarSpecs = () => {
  const location = useLocation();
  const { brand, model, gen, engine } = location.state;

  const car: string = `${brand.name} ${model.name} ${gen.name} ${engine.name}`;

  const [engineData, setEngineData] = useState<string[]>([]);
  const [engineStatus, setEngineStatus] = useState<boolean>(false);

  const [transmissionData, setTransmissionData] = useState<string[]>([]);
  const [transmissionStatus, setTransmissionStatus] = useState<boolean>(false);

  const [suspensionData, setSuspensionData] = useState<string[]>([]);
  const [suspensionStatus, setSuspensionStatus] = useState<boolean>(false);

  const [sizeDimensionData, setSizeDimensionData] = useState<string[]>([]);
  const [sizeDimensionStatus, setSizeDimensionStatus] =
    useState<boolean>(false);

  const [fuelData, setFuelData] = useState<string[]>([]);
  const [fuelStatus, setFuelStatus] = useState<boolean>(false);

  const [commonProblemsData, setCommonProblemsData] = useState<string[]>([]);
  const [commonProblemsStatus, setCommonProblemsStatus] =
    useState<boolean>(false);

  return (
    <section className="w-full flex flex-col justify-center items-center gap-10 mb-20">
      <div className="flex flex-col justify-center items-center w-11/12 bg-white rounded-md shadow-lg">
        <button
          className="flex flex-row w-full p-5"
          aria-label="Get Engine Specs"
          onClick={() => {
            engineData.length === 0 ? specsFetch(setEngineData, 1, car) : null;
            setEngineStatus(!engineStatus);
          }}
        >
          <div className="flex w-full justify-between text-center">
            <p className="font-primary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl select-none">
              Engine
            </p>
            <img src={Arrow} className="w-5 select-none" alt="arrow" />
          </div>
        </button>
        <div className="flex justify-center items-center w-full">
          {engineStatus ? (
            <CarSpecsData data={engineData} set={setEngineStatus} />
          ) : null}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-11/12 bg-white rounded-md shadow-lg">
        <button
          className="flex flex-row w-full p-5"
          aria-label="Get Suspension Specs"
          onClick={() => {
            suspensionData.length === 0
              ? specsFetch(setSuspensionData, 2, car)
              : null;
            setSuspensionStatus(!suspensionStatus);
          }}
        >
          <div className="flex w-full justify-between text-center">
            <p className="font-primary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl select-none">
              Suspension
            </p>
            <img src={Arrow} className="w-5 select-none" alt="arrow" />
          </div>
        </button>
        <div className="flex justify-center items-center w-full">
          {suspensionStatus ? (
            <CarSpecsData data={suspensionData} set={setSuspensionStatus} />
          ) : null}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-11/12 bg-white rounded-md shadow-lg">
        <button
          className="flex flex-row w-full p-5"
          aria-label="Get Size And Dimensions Specs"
          onClick={() => {
            sizeDimensionData.length === 0
              ? specsFetch(setSizeDimensionData, 3, car)
              : null;
            setSizeDimensionStatus(!sizeDimensionStatus);
          }}
        >
          <div className="flex w-full justify-between text-center">
            <p className="font-primary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl select-none">
              Size and Dimensions
            </p>
            <img src={Arrow} className="w-5 select-none" alt="arrow" />
          </div>
        </button>
        <div className="flex justify-center items-center w-full">
          {sizeDimensionStatus ? (
            <CarSpecsData
              data={sizeDimensionData}
              set={setSizeDimensionStatus}
            />
          ) : null}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-11/12 bg-white rounded-md shadow-lg">
        <button
          className="flex flex-row w-full p-5"
          aria-label="Get Fuel Consumption Specs"
          onClick={() => {
            fuelData.length === 0 ? specsFetch(setFuelData, 4, car) : null;
            setFuelStatus(!fuelStatus);
          }}
        >
          <div className="flex w-full justify-between text-center">
            <p className="font-primary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl select-none">
              Fuel Consumption
            </p>
            <img src={Arrow} className="w-5 select-none" alt="arrow" />
          </div>
        </button>
        <div className="flex justify-center items-center w-full">
          {fuelStatus ? (
            <CarSpecsData data={fuelData} set={setFuelStatus} />
          ) : null}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-11/12 bg-white rounded-md shadow-lg">
        <button
          className="flex flex-row w-full p-5"
          aria-label="Get Transmission Specs"
          onClick={() => {
            transmissionData.length === 0
              ? specsFetch(setTransmissionData, 5, car)
              : null;
            setTransmissionStatus(!transmissionStatus);
          }}
        >
          <div className="flex w-full justify-between text-center">
            <p className="font-primary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl select-none">
              Transmission
            </p>
            <img src={Arrow} className="w-5 select-none" alt="arrow" />
          </div>
        </button>
        <div className="flex justify-center items-center w-full">
          {transmissionStatus ? (
            <CarSpecsData data={transmissionData} set={setTransmissionStatus} />
          ) : null}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-11/12 bg-white rounded-md shadow-lg">
        <button
          className="flex flex-row w-full p-5"
          aria-label="Get Common Problems"
          onClick={() => {
            commonProblemsData.length === 0
              ? specsFetch(setCommonProblemsData, 6, car)
              : null;
            setCommonProblemsStatus(!commonProblemsStatus);
          }}
        >
          <div className="flex w-full justify-between text-center">
            <p className="font-primary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl select-none">
              Common Problems
            </p>
            <img src={Arrow} className="w-5 select-none" alt="arrow" />
          </div>
        </button>
        <div className="flex justify-center items-center w-full">
          {commonProblemsStatus ? (
            <CarSpecsData
              data={commonProblemsData}
              set={setCommonProblemsStatus}
            />
          ) : null}
        </div>
        <ReturnTopButton />
      </div>
    </section>
  );
};

export default CarSpecs;
