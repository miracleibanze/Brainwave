import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="relative top-0 max-w-full min-w-full">
        <Header />
      </div>
      <div className="pt-[4.75rem] md:pt-[5.25rem] max-w-full min-w-full overflow-hidden">
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <RoadMap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
