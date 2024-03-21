import { Dispatch } from "react";

type dropdownType = {
    data : string[];
    set : Dispatch<React.SetStateAction<{
        name: string;
        index?: number;
    }>>;
    setIsOpen : Dispatch<React.SetStateAction<boolean>>;
    isOpen : boolean;
    handler : (set: Dispatch<React.SetStateAction<{name: string; index?: number;}>>, value: string) => void;
    resetState : (id: number) => void;
    index : number | undefined;
    DataFetch? : (type: string, set?: Dispatch<React.SetStateAction<string[]>>, id?: string) => Promise<void> | undefined;
    ObjectId?: string | undefined;
    nextState?: Dispatch<React.SetStateAction<string[]>> | undefined;
}

const Dropdown = ({data, set, setIsOpen, isOpen, 
                   handler, resetState, index, DataFetch, 
                   ObjectId, nextState} : dropdownType) => {


    return (
        <div className="absolute mt-[2px] max-h-64 overflow-y-scroll shadow-md border-gray-200 border-[1px] rounded-md" id="dropdown">
        {data ? data.map((element : string) => {
            return <div onClick={e => {handler(set, element); setIsOpen(!isOpen); resetState(index); DataFetch ? DataFetch(element, nextState, ObjectId) : null;}}
             key={element} className="h-12 w-60 p-2  border-gray-200 bg-white text-xl hover:bg-blue-500 cursor-pointer">{element}</div>   
        }) : null}
        </div>
    )   
}

export default Dropdown;