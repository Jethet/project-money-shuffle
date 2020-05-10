import React from "react";
import categoriesData from "../categoriesData.js";

class StandardCategories extends React.Component {
  state = {
    categoriesList: categoriesData,
  };

  getStandardCategories = () => {
    const {categoryName, totalBudget, amountSpent, remainingBudget, budgetDate } = Object.values(this.state.categoriesList)
    console.log(categoryName, totalBudget, amountSpent, remainingBudget, budgetDate);
    console.log(this.state.categoriesList)
  };

  componentDidMount() {
    this.getStandardCategories();
  }

  render() {
    return (
      <div className="category-items-container">
        <h3>My Budget Categories</h3>

        <ul className="category-items">
          <h6>{this.state.categoriesList.categoryName}</h6>
          <li>Total budget amount: {this.state.categoriesList.totalBudget}</li>
          <li>Total amount slient: {this.state.categoriesList.amountSpent}</li>
          <li>Total remaining budget: {this.state.categoriesList.remainingBudget}</li>
          <li>Budget created on: {this.state.categoriesList.budgetDate}</li>
        </ul>

        <br />
      </div>
    );
  }
}

export default StandardCategories;
