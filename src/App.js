import Navbar from "./components/Core/Navbar/Navbar";
import Sidebar from "./components/Core/Sidebar/Sidebar";
import "./app.css";
import Details from "./Pages/Details/Details";
import Footer from "./components/Core/Footer/Footer";
import OperatingCity from "./Pages/OperatingCity/OperatingCity";
import OperatingLocation from "./Pages/OperatingCity/OperatingLocation/OperatingLocation";
import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="home-container-outer">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Details/>}/>
        <Route path="/operatingCity" element={<OperatingCity/>}/>
        <Route path="/operatingCity/:cityId/addLocation" element={<OperatingLocation/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
