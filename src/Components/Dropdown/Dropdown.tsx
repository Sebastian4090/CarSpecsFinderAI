
const Dropdown = (data : string[]) => {
    console.log(data);
    console.log(data[0]);
    return (
        <div className="absolute mt-[2px] max-h-64 overflow-y-scroll shadow-md border-gray-200 border-[1px] rounded-md" id="dropdown">
        {data.map((element : string) => {
            return <div key={element} className="h-12 w-44 p-2  border-gray-200 bg-white text-xl hover:bg-blue-500 cursor-pointer">{element}</div>   
        })}
        </div>
    )   
}

export default Dropdown;