import { useEffect, useState, useRef, Dispatch, useMemo } from 'react';
import downArrow from "./Img/down-arrow.svg";
import Dropdown from "../Dropdown/Dropdown";

const Data = async (type: string, 
                    id: string, 
                    set: Dispatch<React.SetStateAction<string[]>>)
                    : Promise<void> => {
    const response = await fetch(`http://localhost:3000/data/${id}/${type}`);
    const data : any = await response.json();
    set(data);
    console.log('data working')
}

const Form = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [brand, setBrand] = useState<string>('Brands');
    const [brandList, setBrandList] = useState<string[]>([]);

    const [model, setModel] = useState<string>('Model');
    const [modelList, setModelList] = useState<string[]>([]);

    const [gen, setGen] = useState<string>('Generation');
    const [genList, setGenList] = useState<string[]>([]);

    const [engine, setEngine] = useState<string>('Engine');
    const [engineList, setEngineList] = useState<string[]>(['1.6', '2.0']); //for testing purposes

    const [dropNum, setDropNum] = useState(0);

    let dropRef = useRef<HTMLInputElement>(null);

    // close dropdown on clicking away + fetch brand data
    useEffect(() => {
        let handler = (e : Event) => {
            if(!dropRef.current?.contains(e.target as HTMLButtonElement)) {
                setIsOpen(false);
            }  
        };

        document.addEventListener("mousedown", handler);
        Data('Brands', '65f046a87e9d5263e088681c', setBrandList);

        return() => {
            document.removeEventListener("mousedown", handler);
            Data('Brands', '65f046a87e9d5263e088681c', setBrandList);
        }

    }, []);

    return (
        <div className="flex justify-center font-sans w-full h-80 mb-20">
            <div className="w-10/12 bg-slate-200 p-6 rounded-lg flex flex-col shadow-md">
                    <div className="w-full">
                        <h1 className="font-primary text-black text-4xl text-center">Choose a Manufactuer, Model, Generation and Engine!</h1>
                    </div>
                    <div className="flex flex-row justify-center gap-x-20 pt-10">
                        <div className="relative select-none" id="dropdownButton" ref={dropNum === 1 ? dropRef : null}>
                            <div onClick={(e) => {setIsOpen(!isOpen); setDropNum(1);}} 
                            id="button" className="h-12 w-52 text-black rounded-sm text-xl font-primary outline 
                            outline-1 flex justify-between p-2 items-center cursor-pointer">
                                {brand}
                                <img src={downArrow} className="w-5 h-auto pl-2" />
                            </div>
                            {isOpen && dropNum === 1 ? <Dropdown data={brandList} set={setBrand} setIsOpen={setIsOpen} isOpen={isOpen} /> : null}
                    </div>
                    <div className="relative select-none" id="dropdownButton" ref={dropNum === 2 ? dropRef : null}>
                        <div onClick={() => {setIsOpen(!isOpen); setDropNum(2); brand !== "Brands" ? 
                                            Data(brand, '65f046b17e9d5263e088681d', setModelList) : null}} 
                        id="button" className="h-12 w-52 text-black 
                        rounded-sm text-xl font-primary outline 
                        outline-1 flex justify-between p-2 items-center cursor-pointer">
                            {model}
                            <img src={downArrow} className="w-5 h-auto pl-2" />    
                        </div>
                        {isOpen && dropNum === 2 ? <Dropdown data={modelList} set={setModel} setIsOpen={setIsOpen} isOpen={isOpen}/> : null}
                    </div>
                    <div className="relative select-none" id="dropdownButton" ref={dropNum === 3 ? dropRef : null}>
                        <div onClick={() => {setIsOpen(!isOpen); setDropNum(3); model !== "Model" ? 
                                            Data(model, '65fae05a0c626bd5840eeaeb', setGenList) : null}} id="button" className="h-12 w-52 text-black 
                        rounded-sm text-xl font-primary outline 
                        outline-1 flex justify-between p-2 items-center cursor-pointer">
                            {gen}
                            <img src={downArrow} className="w-5 h-auto pl-2" />
                        </div>
                        {isOpen && dropNum === 3 ? <Dropdown data={genList} set={setGen} setIsOpen={setIsOpen} isOpen={isOpen}/> : null}
                    </div>
                    <div className="relative select-none" id="dropdownButton" ref={dropNum === 4 ? dropRef : null}>
                        <div onClick={() => {setIsOpen(!isOpen); setDropNum(4); gen !== "Generation" ? 
                                            engineList : null}} id="button" className="h-12 w-52 text-black 
                        rounded-sm text-xl font-primary outline 
                        outline-1 flex justify-between p-2 items-center cursor-pointer">
                            {engine}
                            <img src={downArrow} className="w-5 h-auto pl-2" />    
                        </div>
                        {isOpen && dropNum === 4 ? <Dropdown data={engineList} set={setEngine} setIsOpen={setIsOpen} isOpen={isOpen}/> : null}
                    </div>
                    </div>
                    {engine !== "Engine" ?
                        <div className='h-full flex justify-center items-end pb-2 pointer-events-none'>
                            <div className='w-5/12 bg-indigo-500 p-6 rounded-md shadow-md text-center 
                            cursor-pointer hover:bg-indigo-600 active:bg-indigo-700 active select-none pointer-events-auto'>
                                <p className='font-primary text-4xl'>GET SPECS</p>
                            </div>
                        </div> : null }
                </div>
            </div>
    )
}

export default Form;
