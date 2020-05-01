import React from "react";

function Category(props) {

    return (
      <div>
        <div className="category-container">
          <div id="category-header">
            <h4>{props.category.categoryName}</h4>
          </div>
          <div id="category-header">
            <h6>Total budget: {props.category.totalBudget}</h6>
          </div>
          <div id="category-header">
            <h6>Total amount spent: {props.category.amountSpent}</h6>
          </div>
          <div id="category-header">
            <h6>Total remaining budget: {props.category.remainingBudget}</h6>
          </div>
          <div id="category-header">
            <h6>Budget created on: {props.category.budgetDate}</h6>
          </div>
          <button className="btn" style={{backgroundColor: "lightblue"}}>View category</button>
          <br/>
          <hr/>
        </div>
      </div>
    );
  }


export default Category;
