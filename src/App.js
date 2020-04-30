import React from "react";
import "./App.css";

import CreateCategory from "./components/CreateCategory";
import CategoryOverview from "./components/CategoryOverview";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


class App extends React.Component {
  
  render() {
    return (
      <div className="App">

        <Navbar />
        <CategoryOverview />
        <CreateCategory />
        <Footer />

      </div>
    );
  }
}

export default App;
