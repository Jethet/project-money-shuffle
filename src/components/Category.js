import React from "react";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "Test",
      totalBudget: 0,
      amountSpent: 0,
      remainingBudget: 0,
      date: "",
    };
  }
  render() {
    return (
      <div>
        <div className="container">
          <div id="category-header">
            <h3>Category name: {this.categoryName}</h3>
          </div>
          <div id="category-header">
            <h3>Total budget: {this.totalBudget}</h3>
          </div>
          <div id="category-header">
            <h3>Total amount spent: {this.amountSpent}</h3>
          </div>
          <div id="category-header">
            <h3>Total remaining budget: {this.remainingBudget}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
