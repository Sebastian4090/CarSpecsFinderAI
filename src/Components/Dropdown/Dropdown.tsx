import { Dispatch } from "react";

type dropdownType = {
  data: string[];
  set: Dispatch<
    React.SetStateAction<{
      name: string;
      index?: number;
    }>
  >;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  handler: (
    set?: Dispatch<React.SetStateAction<{ name: string; index?: number }>>,
    value?: string
  ) => void;
  resetState: (id?: number) => void;
  index?: number;
  DataFetch?: (
    type: string,
    set?: Dispatch<React.SetStateAction<string[]>>,
    id?: string
  ) => Promise<void>;
  ObjectId?: string;
  nextState?: Dispatch<React.SetStateAction<string[]>>;
  additionalInfo?: string;
};

const Dropdown = ({
  data,
  set,
  setIsOpen,
  isOpen,
  handler,
  resetState,
  index,
  DataFetch,
  ObjectId,
  nextState,
  additionalInfo = "",
}: dropdownType) => {
  return (
    <div
      className="absolute z-10 w-64 xl:w-60 2xl:w-80 mt-12 2xl:mt-20 max-h-64 overflow-y-scroll shadow-md border-gray-200 rounded-b-md flex flex-col"
      id="dropdown"
    >
      {data
        ? data.map((element: string) => {
            return (
              <button
                onClick={(e) => {
                  handler(set, element);
                  setIsOpen(!isOpen);
                  resetState(index);
                  DataFetch
                    ? additionalInfo !== ""
                      ? DataFetch(
                          `${additionalInfo}_${element}`,
                          nextState,
                          ObjectId
                        )
                      : DataFetch(element, nextState, ObjectId)
                    : null;
                }}
                key={element}
                aria-label={`Choose ${element}`}
                className="h-12 xl:h-16 2xl:h-20 p-4 border-gray-200 bg-white hover:bg-blue-500
                 active:bg-blue-900 font-primary text-lg leading-4 2xl:text-2xl flex-shrink-0 flex-grow-0 overflow-clip select-none"
              >
                {element}
              </button>
            );
          })
        : null}
    </div>
  );
};

export default Dropdown;
