import React from "react";
import "./App.scss";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Input from "./components/Input";
import Advanced from "./components/Advanced";
import TopFooter from "./components/TopFooter";
import SecFooter from "./components/SecFooter";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Input />
      <Advanced />
      <TopFooter />
      <SecFooter />
    </div>
  );
};

export default App;
