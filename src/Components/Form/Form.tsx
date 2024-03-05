import { useEffect, useState, useRef } from 'react';
import downArrow from "./Img/down-arrow.svg";
import Dropdown from "../Dropdown/Dropdown";

const Form = (cars) => {

    console.log('cars', cars)
    console.log('type', typeof(cars));
    const [isOpen, setIsOpen] = useState(false);
    const [brand, setBrand] = useState('Brand');
    const [model, setModel] = useState('Model');
    const [year, setYear] = useState('Year');
    const [engine, setEngine] = useState('Engine');

    const [dropNum, setDropNum] = useState(0);

    let dropRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        let handler = (e : Event) => {
            if(!dropRef.current?.contains(e.target as HTMLButtonElement)) {
                setIsOpen(false);
                console.log(dropRef.current)
                console.log(typeof(e.target));
            }  
        };

        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }
    });

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
                            <div onClick={() => {setIsOpen(!isOpen); setDropNum(1); val}} id="button" className="h-12 w-44 text-black rounded-sm text-xl font-primary outline 
                            outline-1 flex justify-between p-2 items-center cursor-pointer">
                                {brand}
                                <img src={downArrow} className="w-5 h-auto pl-2" />
                            </div>
                            {isOpen && dropNum === 1 ? <Dropdown data={cars.Brands}/> : null}
                    </div>
                    <div className="relative select-none" id="dropdownButton" ref={dropNum === 2 ? dropRef : null}>
                        <div onClick={() => {setIsOpen(!isOpen); setDropNum(2)}} id="button" className="h-12 w-44 text-black rounded-sm text-xl font-primary outline 
                        outline-1 flex justify-between p-2 items-center cursor-pointer">
                            {model}
                            <img src={downArrow} className="w-5 h-auto pl-2" />    
                        </div>
                        {isOpen && dropNum === 2 ? <Dropdown /> : null}
                    </div>
                    <div className="relative select-none" id="dropdownButton" ref={dropNum === 3 ? dropRef : null}>
                        <div onClick={() => {setIsOpen(!isOpen); setDropNum(3)}} id="button" className="h-12 w-44 text-black rounded-sm text-xl font-primary outline 
                        outline-1 flex justify-between p-2 items-center cursor-pointer">
                            {year}
                            <img src={downArrow} className="w-5 h-auto pl-2" />
                        </div>
                        {isOpen && dropNum === 3 ? <Dropdown /> : null}
                    </div>
                    <div className="relative select-none" id="dropdownButton" ref={dropNum === 4 ? dropRef : null}>
                        <div onClick={() => {setIsOpen(!isOpen); setDropNum(4)}} id="button" className="h-12 w-44 text-black rounded-sm text-xl font-primary outline 
                        outline-1 flex justify-between p-2 items-center cursor-pointer">
                            {engine}
                            <img src={downArrow} className="w-5 h-auto pl-2" />    
                        </div>
                        {isOpen && dropNum === 4 ? <Dropdown /> : null}
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Form;
