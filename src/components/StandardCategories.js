import React from "react";

function StandardCategories(props) {

    return (
      <div className="category-items-container">
        <ul className="category-items">
          <h6>
            Category: {props.categoryName}
          </h6>
          <li>Total budget amount: {props.totalBudget}</li>
          <li>Total amount spent: {props.amountSpent}</li>
          <li>Total remaining budget: {props.remainingBudget}</li>
          <li>Budget created on: {props.budgetDate}</li>
          <button
              type="submit"
              className="btn btn-sm btn-outline-primary py-0"
              style={{ backgroundColor: "lightblue", color: "black", border: "none" }}
            >
              View
            </button>
        </ul>

        <br />
      </div>
    );
  }


export default StandardCategories;
