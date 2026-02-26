import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;