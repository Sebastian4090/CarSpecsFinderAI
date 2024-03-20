import { Dispatch } from "react";

type dropdownType = {
    data : string[];
    set : Dispatch<React.SetStateAction<string>>;
    setIsOpen : Dispatch<React.SetStateAction<boolean>>;
    isOpen : boolean;
}

const Dropdown = ({data, set, setIsOpen, isOpen} : dropdownType) => {
    // console.log('data', data);


    return (
        <div className="absolute mt-[2px] max-h-64 overflow-y-scroll shadow-md border-gray-200 border-[1px] rounded-md" id="dropdown">
        {data ? data.map((element : string) => {
            return <div onClick={e => {set(element); setIsOpen(!isOpen);}} key={element} className="h-12 w-52 p-2  border-gray-200 bg-white text-xl hover:bg-blue-500 cursor-pointer">{element}</div>   
        }) : null}
        </div>
    )   
}

export default Dropdown;