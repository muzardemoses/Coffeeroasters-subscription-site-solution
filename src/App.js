import './App.css';
import {Header, Footer} from './Components';
import{Home, AboutUs, CreateYourPlan} from './Pages';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/create-your-plan" element={<CreateYourPlan />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
