import React from "react";
import "./App.css";

// import CreateCategory from "./components/CreateCategory";
import CategoryOverview from "./components/CategoryOverview";
import StandardCategories from "./components/StandardCategories"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "",
      totalBudget: "",
      amountSpent: "",
      remainingBudget: "",
      budgetDate: "",
    };
  }

  render() {
    return (
      <div className="App">

        <Navbar />
        <StandardCategories />
        <CategoryOverview />
        
        
        {/* <CreateCategory /> */}
        <Footer />

      </div>
    );
  }
}

export default App;
