import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CategoryOverview from "./components/CategoryOverview";
import CreateCategory from "./components/CreateCategory";
import EditCategory from "./components/EditCategory";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={CategoryOverview} />
        <Route exact path="/create" component={CreateCategory} />
        <Route exact path="/edit" component={EditCategory} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
