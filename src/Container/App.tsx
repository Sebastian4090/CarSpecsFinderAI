import Banner from "../Components/Banner/Banner";
import Label from "../Components/Label/Label";
import Form from "../Components/Form/Form";
import Footer from "../Components/Footer/Footer";

interface CarsGenInfo {
  Brands : object[]
}

let mockDB: CarsGenInfo = {
  Brands : {"Audi" : {
    "A3" : {
      "gen_8l" : ["1.6"]
    }
  }}
}

function App() {

  return (
    <div className="bg-slate-100 h-full">
      <Banner />
      <Label />
      <Form cars={mockDB}/>
      <Footer />
    </div>
  )
}

export default App;
