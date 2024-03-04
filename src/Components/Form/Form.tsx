import { useRef, useState } from 'react';
import { useClickAway } from "@uidotdev/usehooks";
import downArrow from "./Img/down-arrow.svg";
import Dropdown from "../Dropdown/Dropdown";


const Form = () => {
    const [isOpen, setIsOpen] = useState(false);

    // const closeDropdown = () =&gt; {
    //     const ref = useRef(null);
    //     setIsOpen(false);
    //     useClickAway(ref, closeDropdown);
    // };

    return (
        <div className="flex justify-center font-sans w-full h-80 mb-20">
            <div className="w-10/12 bg-slate-200 p-6 rounded-lg flex flex-col shadow-md">
                    <div className="w-full">
                        <h1 className="font-primary text-black text-4xl text-center">Choose a Manufactuer, Model, Year and Engine!</h1>
                    </div>
                    <div className="flex flex-row justify-center gap-x-20 pt-10">
                        <div className="relative select-none" id="dropdownButton">
                            <div onClick={() => setIsOpen(!isOpen)} id="button" className="h-12 w-44 text-black rounded-sm text-xl font-primary outline 
                            outline-1 flex justify-between p-2 items-center cursor-pointer">
                                Brand
                                <img src={downArrow} className="w-5 h-auto pl-2" />
                            </div>
                            {isOpen ? <Dropdown /> : null}
                        </div>

                        <div className="h-12 w-44 text-black rounded-sm text-xl font-primary outline 
                        outline-1 flex justify-between p-2 items-center cursor-pointer">
                            Model
                            <img src={downArrow} className="w-5 h-auto pl-2" />    
                        </div>
                        <div className="h-12 w-44 text-black rounded-sm text-xl font-primary outline 
                        outline-1 flex justify-between p-2 items-center cursor-pointer">
                            Year
                            <img src={downArrow} className="w-5 h-auto pl-2" />
                        </div>
                        <div className="h-12 w-44 text-black rounded-sm text-xl font-primary outline 
                        outline-1 flex justify-between p-2 items-center cursor-pointer">
                            Engine
                            <img src={downArrow} className="w-5 h-auto pl-2" />    
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Form;
