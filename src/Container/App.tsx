import Banner from "../Components/Banner/Banner";
import Label from "../Components/Label/Label";
import Form from "../Components/Form/Form";
import Footer from "../Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-100 h-full">
      <Banner />
      <Label />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
