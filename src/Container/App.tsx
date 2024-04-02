import Banner from "../Components/Banner/Banner";
import Label from "../Components/Label/Label";
import Form from "../Components/Form/Form";
import Footer from "../Components/Footer/Footer";
import CarHeader from "../Components/CarHeader/CarHeader";
import CarSpecs from "../Components/CarSpecs/CarSpecs";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
                <Label />
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
