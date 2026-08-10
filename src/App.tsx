import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ServiceTimes from "./components/ServiceTimes";
import Vision from "./components/Vision";
import Founder from "./components/Founder";
import Bishop from "./components/Bishop";
import WhatToExpect from "./components/WhatToExpect";
import Sermons from "./components/Sermons";
import Ministries from "./components/Ministries";
import Events from "./components/Events";
import Giving from "./components/Giving";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <Hero />
      <ServiceTimes />
      <Vision />
      <Founder />
      <Bishop />
      <WhatToExpect />
      <Sermons />
      <Ministries />
      <Events />
      <Giving />
      <Footer />
    </div>
  );
}

export default App;
