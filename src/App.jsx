import About from "./components/About";
import ClientReviews from "./components/ClientReviews";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=" w-full h-full text-white bg-zinc-900">
      <Navbar />

      <LandingPage />

      <div data-scroll data-scroll-section data-scroll-speed=".3" className="">
        <Marquee />

        <About />
      </div>

      <Eyes />

      <Featured />

      <ClientReviews />

      <Footer />
    </div>
  );
}

export default App;
