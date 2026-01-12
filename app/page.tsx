import About from "./components/About";
import HomePage from "./components/Home";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
   <div className="text-center pt-20">
    <Navbar/>
    <HomePage/>
    <About />
   </div>
  );
}
