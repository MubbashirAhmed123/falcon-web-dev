import About from "./components/About";
import HomePage from "./components/Home";
import Navbar from "./components/Navbar";
import ServicesPage from "./components/Services";
import TechnologiesPage from "./components/Technologies";

export default function Home() {
  return (
   <div className="text-center pt-20">
    <Navbar/>
     {/* add lazy loading for components below */}


    <HomePage/>

    <About />
    <ServicesPage/>
    <TechnologiesPage/>
   </div>
  );
}
