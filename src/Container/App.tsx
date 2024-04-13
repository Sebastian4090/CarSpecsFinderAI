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
    text: "Introducing First AI powered car specifications website in the WORLD!",
  },
  {
    url: "https://images.pexels.com/photos/6920503/pexels-photo-6920503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Blue Bmw Car on the Road",
    text: "We support 32 brands and more than 300 models!",
  },
  {
    url: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Red Alfa Romeo C4 on Road Near Trees",
    text: "No registration required!",
  },
  {
    url: "https://images.pexels.com/photos/12351471/pexels-photo-12351471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
