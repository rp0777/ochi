import About from "./components/About";
import ClientReviews from "./components/ClientReviews";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marqee from "./components/Marqee";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=" w-full h-full text-white bg-zinc-900">
      <Navbar />

      <LandingPage />

      <Marqee />

      <About />

      <Eyes />

      <Featured />

      <ClientReviews />

      <Footer />
    </div>
  );
}

export default App;
