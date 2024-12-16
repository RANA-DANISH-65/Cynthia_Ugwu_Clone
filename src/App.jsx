import { useEffect } from "react";
import About from "./Components/About";
import Cursor from "./Components/Cursor";
import Footor from "./Components/Footor";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Subscribe from "./Components/Subscribe";
import Works from "./Components/Works";

function App() {
  

  return (
    <div className="relative">
      <Cursor />
      <Navbar />
      <Hero />
      <Works />
      <About />
      <Subscribe />
      <Footor />
    </div>
  );
}

export default App;
