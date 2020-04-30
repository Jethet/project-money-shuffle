import React from "react";
import CreateCategory from "./CreateCategory";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "Test",
      totalBudget: 0,
      amountSpent: 0,
      remainingBudget: 0,
      budgetDate: "date",
    };
  }

  render() {
    return (
      <div>
        <div className="category-container">
          <div id="category-header">
            <h3>Category name: {this.state.categoryName}</h3>
          </div>
          <div id="category-header">
            <h3>Total budget: {this.state.totalBudget}</h3>
          </div>
          <div id="category-header">
            <h3>Total amount spent: {this.state.amountSpent}</h3>
          </div>
          <div id="category-header">
            <h3>Total remaining budget: {this.state.remainingBudget}</h3>
          </div>
          <div id="category-header">
            <h3>Budget date: {this.state.budgetDate}</h3>
          </div>
          <br/>
          <hr/>
        </div>
      </div>
    );
  }
}

export default Category;
