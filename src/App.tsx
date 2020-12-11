import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header"
import {Footer} from "./components/Footer/Footer"
import {LaunchesInfoContainer}  from "./components/Launches"

function App() {
  return <div className="App">
    <Header />
    <LaunchesInfoContainer />
    <Footer />
  </div>;
}

export default App;
