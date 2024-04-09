import Banner from "../Components/Banner/Banner";
import ImageSlider from "../Components/ImageSlider/ImageSlider";
import Form from "../Components/Form/Form";
import Footer from "../Components/Footer/Footer";
import CarHeader from "../Components/CarHeader/CarHeader";
import CarSpecs from "../Components/CarSpecs/CarSpecs";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const ImageSliderPhotos = [
  {
    url: "https://images.pexels.com/photos/13627424/pexels-photo-13627424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Silver Audi S3 on the Road",
    msg: "Get to know your car better!",
  },
  {
    url: "https://images.pexels.com/photos/6920503/pexels-photo-6920503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Blue Bmw Car on the Road",
    msg: "We support 32 brands and more than 300 models!",
  },
  {
    url: "https://images.pexels.com/photos/2521559/pexels-photo-2521559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Close Up Photography of Dodge Challenger",
    msg: "",
  },
  {
    url: "https://images.pexels.com/photos/12351471/pexels-photo-12351471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "A Classic Convertible Mercedes Benz on the Road",
    msg: "",
  },
];

function App() {
  return (
    <Router>
      <div className="bg-slate-100 h-full">
        <Banner />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ImageSlider photosUrls={ImageSliderPhotos} />
                <Form />
              </>
            }
          ></Route>
          <Route
            path="/GetCar"
            element={
              <>
                <CarHeader />
                <CarSpecs />
              </>
            }
          ></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
