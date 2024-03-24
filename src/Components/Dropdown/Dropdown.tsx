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
}: dropdownType) => {
  return (
    <div
      className="absolute z-10 w-64 xl:w-60 mt-12 max-h-64 overflow-y-scroll shadow-md border-gray-200 rounded-b-md"
      id="dropdown"
    >
      {data
        ? data.map((element: string) => {
            return (
              <div
                onClick={(e) => {
                  handler(set, element);
                  setIsOpen(!isOpen);
                  resetState(index);
                  DataFetch ? DataFetch(element, nextState, ObjectId) : null;
                }}
                key={element}
                className="h-12 xl:h-16 p-2  border-gray-200 bg-white text-base hover:bg-blue-500 cursor-pointer active:bg-blue-900"
              >
                {element}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Dropdown;
