import { Dispatch } from "react";

type dropdownType = {
  data: string[];
  set: Dispatch<
    React.SetStateAction<{
      name: string;
      index: number | undefined;
    }>
  >;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  handler: (
    set:
      | Dispatch<
          React.SetStateAction<{ name: string; index: number | undefined }>
        >
      | undefined,
    value: string
  ) => void;
  resetState: (id: number | undefined) => void;
  index: number | undefined;
  DataFetch: (
    type: string,
    set: Dispatch<React.SetStateAction<string[]>> | undefined,
    id: string | undefined
  ) => Promise<void> | undefined;
  ObjectId: string | undefined;
  nextState: Dispatch<React.SetStateAction<string[]>> | undefined;
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
                 active:bg-blue-900 font-primary text-lg 2xl:text-3xl"
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
