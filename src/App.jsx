import React from "react";
import Navbar from "./components/Navbar.jsx";
import Pictures from "./components/pictures.jsx";
import Content from "./components/Content.jsx";
import PartnerPrograms from "./components/PartnerPrograms.jsx";
import GetStarted from "./components/GetStarted.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Pictures />
      <Content />
      <PartnerPrograms />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;
