import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CategoryOverview from "./components/CategoryOverview";
import CreateCategory from "./components/CreateCategory";
import ViewCategory from "./components/ViewCategory";
import EditCategory from "./components/EditCategory";
import CategoryState from "./components/CategoryState"

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={CategoryOverview} />
        {/* <Route exact path="/create" component={CreateCategory} /> */}
        <Route exact path="/view" component={ViewCategory} />
        {/* <Route exact path="/edit" component={EditCategory} /> */}

        <Route exact path="/state" component={CategoryState} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
