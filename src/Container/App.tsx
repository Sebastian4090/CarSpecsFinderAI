import Banner from "../Components/Banner/Banner";
import Label from "../Components/Label/Label";
import Form from "../Components/Form/Form";
import Footer from "../Components/Footer/Footer";

let mockDB: object = {
  Brands : ['Audi', 'BMW', 'Citroen', 'Cadilac', 'Chevrolet', 'Porsche'],
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
