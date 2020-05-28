import React from "react";

class ViewCategory extends React.Component {

  render() {
    return (
      <div>
        <ul className="category-items">
          <h6>Category: {this.props.categoryName}</h6>
          <li>Total budget amount: {this.props.totalBudget}</li>
          <li>Total amount spent: {this.props.amountSpent}</li>
          <li>Total remaining budget: {this.props.remainingBudget}</li>
          <li>Budget created on: {this.props.budgetDate}</li>
          <button type="submit" className="category-button" >
            Change
          </button>
          <button type="submit" className="category-button" >
            Delete
          </button>
        </ul>
      </div>
    );
  }
}

export default ViewCategory;
