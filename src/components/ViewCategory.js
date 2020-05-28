import React from "react";

function ViewCategory(props) {
    
    

    return (
      <div>
        <ul className="category-items">
          <h6>Category: {props.categoryName}</h6>
          <li>Total budget amount: {props.totalBudget}</li>
          <li>Total amount spent: {props.amountSpent}</li>
          <li>Total remaining budget: {props.remainingBudget}</li>
          <li>Budget created on: {props.budgetDate}</li>
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


export default ViewCategory;
