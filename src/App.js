import React from "react";
import Header from "./Components/Header";
import Howitworks from "./Components/Howitworks";
import About from "./Components/About";
import Agent from "./Components/Agent";
import Properties from "./Components/Properties";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./SignupLoginComponent/Form";
import AdForm from "./PutUpAdComponent/AdForm";
import CarouselContainer from "./Components/CarouselContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/Header" component={Header} />
        <Route path="/Howitworks" component={Howitworks} />
        <Route path="/About" component={About} />
        <Route path="/Properties" component={Properties} />
        <Route path="/Agent" component={Agent} />
        <Route path="/Contact" component={Contact} />
        <Route path="/AdForm" component={AdForm} />
        <Route path="/Form" component={Form} />
        <Header />
        <CarouselContainer />
        <Howitworks />
        <About />
        <Properties />
        <Agent />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
