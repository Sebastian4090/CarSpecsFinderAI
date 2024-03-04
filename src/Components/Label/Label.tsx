import car from "./Img/car.jpg"

const Label = () => {
    return (
        <div className="flex justify-center w-full h-2/4">
            <div className="bg-white rounded-lg w-10/12 m-20 h-full flex flex-row items-center shadow-md">
                <div className="w-4/6 h-full my-5 ml-3 flex items-center">
                    <img className="w-full h-auto bg-contain bg-no-repeat bg-center" src={car} alt="car"></img>
                </div>
                <div className="w-2/6 h-auto hover:">
                        <h1 className="text-black text-center text-8xl text-wrap font-primary">GET TO KNOW YOUR CAR BETTER!</h1>
                </div>
            </div>
        </div>
    )
}

export default Label;