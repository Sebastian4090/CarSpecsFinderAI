import { useEffect, useState, useRef } from 'react';
import downArrow from "./Img/down-arrow.svg";
import Dropdown from "../Dropdown/Dropdown";
// import Data from '../Data/Data';

const Form = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [currArray, setCurrArray] = useState([]);
    // const [brand, setBrand] = useState('Brands');

    const [brand, setBrand] = useState('Brands');
    const [brandList, setBrandList] = useState();

    const [model, setModel] = useState('Model');
    const [modelList, setModelList] = useState();

    const [gen, setGen] = useState('Generation');
    const [genList, setGenList] = useState();

    const [engine, setEngine] = useState('Engine');
    const [engineList, setEngineList] = useState();

    const [dropNum, setDropNum] = useState(0);

    let dropRef = useRef<HTMLInputElement>(null);


    const Data = async (type: string, id: string): Promise<any> => {
            await fetch(`http://localhost:3000/data/${id}/${type}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(data => {
                setCurrArray(data);
                console.log('dataCurrArray', currArray);
            })
            .catch(err => console.log("can't fetch data"));

    }

    useEffect(() => {
        let handler = (e : Event) => {
            if(!dropRef.current?.contains(e.target as HTMLButtonElement)) {
                setIsOpen(false);
            }  
        };

        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }

    });
    if (!brandList) {
        console.log('brandlist WORKS')
        useEffect(() => {
            Data('Brands', '65f046a87e9d5263e088681c');
            // setBrandList(currArray);

            console.log('brand list test ', currArray)
        }, [])
    }

    const val = (e : Event) => {
        console.log((e.target as HTMLButtonElement).value)
    }


    return (
        <div className="flex justify-center font-sans w-full h-80 mb-20">
            <div className="w-10/12 bg-slate-200 p-6 rounded-lg flex flex-col shadow-md">
                    <div className="w-full">
                        <h1 className="font-primary text-black text-4xl text-center">Choose a Manufactuer, Model, Year and Engine!</h1>
                    </div>
                    <div className="flex flex-row justify-center gap-x-20 pt-10">
                        <div className="relative select-none" id="dropdownButton" ref={dropNum === 1 ? dropRef : null}>
                            <div onClick={(e) => {setIsOpen(!isOpen); setDropNum(1); console.log(brand);}} 
                            id="button" className="h-12 w-44 text-black rounded-sm text-xl font-primary outline 
                            outline-1 flex justify-between p-2 items-center cursor-pointer">
                                {brand}
                                <img src={downArrow} className="w-5 h-auto pl-2" />
                            </div>
                            {isOpen && dropNum === 1 ? <Dropdown data={currArray} setBrand={setBrand} setIsOpen={setIsOpen} isOpen={isOpen} /> : null}
                    </div>
                    <div className="relative select-none" id="dropdownButton" ref={dropNum === 2 ? dropRef : null}>
                        <div onClick={() => {setIsOpen(!isOpen); setDropNum(2)}} id="button" className="h-12 w-44 text-black 
                        rounded-sm text-xl font-primary outline 
                        outline-1 flex justify-between p-2 items-center cursor-pointer">
                            {model}
                            <img src={downArrow} className="w-5 h-auto pl-2" />    
                        </div>
                        {isOpen && dropNum === 2 ? <Dropdown data={model}/> : null}
                    </div>
                    <div className="relative select-none" id="dropdownButton" ref={dropNum === 3 ? dropRef : null}>
                        <div onClick={() => {setIsOpen(!isOpen); setDropNum(3)}} id="button" className="h-12 w-44 text-black 
                        rounded-sm text-xl font-primary outline 
                        outline-1 flex justify-between p-2 items-center cursor-pointer">
                            {gen}
                            <img src={downArrow} className="w-5 h-auto pl-2" />
                        </div>
                        {isOpen && dropNum === 3 ? <Dropdown data={genList}/> : null}
                    </div>
                    <div className="relative select-none" id="dropdownButton" ref={dropNum === 4 ? dropRef : null}>
                        <div onClick={() => {setIsOpen(!isOpen); setDropNum(4)}} id="button" className="h-12 w-44 text-black 
                        rounded-sm text-xl font-primary outline 
                        outline-1 flex justify-between p-2 items-center cursor-pointer">
                            {engine}
                            <img src={downArrow} className="w-5 h-auto pl-2" />    
                        </div>
                        {isOpen && dropNum === 4 ? <Dropdown data={Engine}/> : null}
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Form;
