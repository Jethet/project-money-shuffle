import React from "react";
import "./App.css";

import CreateExpenseCategory from "./components/CreateExpenseCategory";
import CategoryOverview from "./components/CategoryOverview";


class App extends React.Component {
  // information that the component manages that affect what the component displays
  state = {};

  render() {
    return (
      <div className="App">
        <CategoryOverview />

        <CreateExpenseCategory />
      </div>
    );
  }
}

export default App;
