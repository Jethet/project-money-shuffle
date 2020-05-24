import React from "react";
import { Link } from "react-router-dom";

function StandardCategories(props) {
  return (
    <div className="category-items-container">
      <ul className="category-items">
        <h6>Category: {props.category.categoryName}</h6>
        <li>Total budget amount: {props.category.totalBudget}</li>
        <li>Total amount spent: {props.category.amountSpent}</li>
        <li>Total remaining budget: {props.category.remainingBudget}</li>
        <li>Budget created on: {props.category.budgetDate}</li>
        <button className="view-button" type="submit" >
          <Link to="/edit">View/Edit</Link>
        </button>
      </ul>

      <br />
    </div>
  );
}

export default StandardCategories;
