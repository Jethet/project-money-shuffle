import React from "react";
import "./App.css";

import CreateCategory from "./components/CreateCategory";
import CategoryOverview from "./components/CategoryOverview";
import CategoryData from "./components/CategoryData"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


class App extends React.Component {
  

  render() {
    return (
      <div className="App">

        <Navbar />
        <CategoryOverview />
        <CreateCategory />
        <CategoryData />
        <Footer />

      </div>
    );
  }
}

export default App;
