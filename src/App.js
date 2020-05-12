import React from "react";
import "./App.css";

// import Category from "./components/Category";
import CategoryOverview from "./components/CategoryOverview";
import StandardCategories from "./components/StandardCategories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import categoriesData from "./categoriesData.js";

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

        {categoriesData.map((category) => {
          return (
            <StandardCategories
              key={category.categoryName}
              category={category}
              // totalBudget={category.totalBudget}
              // amountSpent={category.amountSpent}
              // remainingBudget={category.remainingBudget}
              // budgetDate={category.budgetDate}
            />
          );
        })
        }
        <CategoryOverview />
        <Footer />
      </div>
    );
  }
}

export default App;
