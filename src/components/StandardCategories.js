import React from "react";

function StandardCategories(props) {

    return (
      <div className="category-items-container">
        <ul className="category-items">
          <h6>
            Category: {props.category.categoryName}
          </h6>
          <li>Total budget amount: {props.category.totalBudget}</li>
          <li>Total amount spent: {props.category.amountSpent}</li>
          <li>Total remaining budget: {props.category.remainingBudget}</li>
          <li>Budget created on: {props.category.budgetDate}</li>
          <button
              type="submit"
              className="btn btn-sm btn-outline-primary py-0"
              style={{ backgroundColor: "lightblue", color: "black", border: "none" }}
            >
              View/Edit
            </button>
        </ul>

        <br />
      </div>
    );
  }


export default StandardCategories;
