import Banner from "../Components/Banner/Banner";
import ImageSlider from "../Components/ImageSlider/ImageSlider";
import Form from "../Components/Form/Form";
import Footer from "../Components/Footer/Footer";
import CarHeader from "../Components/CarHeader/CarHeader";
import CarSpecs from "../Components/CarSpecs/CarSpecs";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AUDI from "../images/AUDI.webp";
import BMW from "../images/BMW.webp";
import ALFA from "../images/ALFA.webp";
import MERCEDES from "../images/MERCEDES.webp";

const ImageSliderPhotos = [
  {
    url: AUDI,
    alt: "Silver Audi S3 on the Road",
    text: "Introducing First AI powered car specifications website in the WORLD!",
  },
  {
    url: BMW,
    alt: "Blue Bmw Car on the Road",
    text: "We support 32 brands and more than 300 models!",
  },
  {
    url: ALFA,
    alt: "Red Alfa Romeo C4 on Road Near Trees",
    text: "No registration required!",
  },
  {
    url: MERCEDES,
    alt: "A Classic Convertible Mercedes Benz on the Road",
    text: "Get to know your car better!",
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
