import Spinner from "../../Spinner.gif";
import Arrow from "../../down-arrow.svg";

import { Dispatch } from "react";

type CarSpecsType = {
  data: object;
  set: Dispatch<React.SetStateAction<boolean>>;
};

const CarSpecsData = ({ data, set }: CarSpecsType) => {
  return (
    <div className="flex w-full justify-center items-center flex-col">
      <div
        className="flex flex-col md:grid md:grid-cols-3 md:grid-auto-rows md:auto-rows-[1fr] lg:grid-cols-4 xl:grid-cols-5
    2xl:grid-cols-8 w-11/12 justify-center items-center gap-4 my-5"
      >
        {Object.keys(data).length > 0 ? (
          Object.entries(data).map((element: any) => {
            return (
              <div
                key={element[0]}
                className="flex w-full flex-col gap-2 md:h-full bg-indigo-800 text-white font-primary text-xl 2xl:text-xl rounded-md shadow-lg p-2"
              >
                <p className="font-medium">{element[0] + ":"}</p>
                <p className="font-bold">{element[1]}</p>
              </div>
            );
          })
        ) : (
          <div className="flex w-full justify-center items-center md:col-start-2 lg:col-end-4 xl:col-end-5 2xl:col-end-8">
            <img src={Spinner} alt="Spinner" />
          </div>
        )}
      </div>
      {Object.keys(data).length > 0 ? (
        <div className="flex justify-center items-center w-full">
          <div
            className="flex justify-center items-center w-3/12 md:w-1/12 2xl:w-20 font-primary text-xl p-3 md:p-3 xl:p-5 2xl:p-3 border 
            rounded-full cursor-pointer md:place-self-center m-5"
            onClick={(e) => set(false)}
          >
            <img src={Arrow} className="w-40 rotate-180" alt="Close" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CarSpecsData;
