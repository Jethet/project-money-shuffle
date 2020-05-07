import React from "react";

class EditCategory extends React.Component {
  state = {
    categoryName: '',
    totalBudget: null,
    amountSpent: null,
    remainingBudget: null,
    budgetDate: '',
  };

  render(){

    return (
      <div>
        <div className="category-container">
          <div id="category-header">
            <h4>{this.categoryName}</h4>
          </div>
          <div id="category-header">
            <h6>Total budget: {this.state.totalBudget}</h6>
          </div>
          <div id="category-header">
            <h6>Total amount spent: {this.state.amountSpent}</h6>
          </div>
          <div id="category-header">
            <h6>Total remaining budget: {this.state.remainingBudget}</h6>
          </div>
          <div id="category-header">
            <h6>Budget created on: {this.state.budgetDate}</h6>
          </div>
          <button className="btn" style={{backgroundColor: "lightblue"}}>View category</button>
          <br/>
          <hr/>
        </div>
      </div>
    );
  }
}

export default EditCategory;
