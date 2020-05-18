import React from "react";

class ViewCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "",
      totalBudget: "",
      amountSpent: "",
      remainingBudget: "",
      budgetDate: "",
    };
  }

  getCategoryFromStorage = () => {
    let category = this.state;
    if (localStorage.getItem(category) === null) {
      console.log("Category does not exist.");
    } else {
      category = JSON.parse(localStorage.getItem(category));
    }
    console.log(category);

    // return category;
    // this.setState()    DO THIS WITH DECONSTRUCTING?
  };

  render() {
    return (
      <div>
        <h6>Category: {this.category.categoryName}</h6>
        <li>Total budget amount: {this.category.totalBudget}</li>
        <li>Total amount spent: {this.category.amountSpent}</li>
        <li>Total remaining budget: {this.category.remainingBudget}</li>
        <li>Budget created on: {this.category.budgetDate}</li>
        <button
          type="submit"
          className="btn btn-sm btn-outline-primary py-0"
          style={{ backgroundColor: "lightblue", color: "black", border: "none" }}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default ViewCategory;
