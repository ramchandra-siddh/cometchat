import React from "react";
import Navbar from "./components/Navbar";
import Pictures from "./components/pictures";
import Content from "./components/Content";
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
