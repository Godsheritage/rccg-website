import { useState } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/Hero";
import MissionStatement from "./components/Mission/Mission";
import Programs from "./components/Programs/Programs";
import Footer from "./components/Footer/Footer";


// import './App.css'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <MissionStatement/>
      <Programs/>
      <Footer/>
      <div class="bg-blue-500 text-white p-4">Hello Tailwi!</div>

    </>
  );
}

export default App;
