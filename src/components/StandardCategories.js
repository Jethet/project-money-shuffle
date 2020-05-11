import React from "react";
import categoriesData from "../categoriesData.js";

class StandardCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesList: categoriesData,
    };
  }

  getStandardCategories = () => {

    // Map over the array of objects:
    this.state.categoriesList.map((item) => {

      // Get the values from each object in a variable:
      let categoryValues = Object.values(item);

      // categoryValues is now an array of values for each object, with index 0 - 5
      const {
        categoryName,
        totalBudget,
        amountSpent,
        remainingBudget,
        budgetDate
      } = categoryValues;
      
      console.log(categoryValues)
    })
  };

  componentDidMount() {
    this.getStandardCategories();
  }

  render() {
    return (
      <div className="category-items-container">
        <h3>My Budget Categories</h3>

        {/* <ul className="category-items">
          <h6>{this.categoryName}</h6>
          <li>Total budget amount: {this.totalBudget}</li>
          <li>Total amount slient: {this.amountSpent}</li>
          <li>Total remaining budget: {this.remainingBudget}</li>
          <li>Budget created on: {this.budgetDate}</li>
        </ul> */}

        <br />
      </div>
    );
  }
}

export default StandardCategories;
