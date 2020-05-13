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
    super();
    this.state = {
      categories: categoriesData
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
