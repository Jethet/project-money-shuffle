import React from "react";

// The same as in CreateCategory: use localstate here plus a callback function to globalstate, to
// send the updated data to the CategoryState

class EditCategory extends React.Component {
  state = {
    categoryName: "",
    totalBudget: "",
    amountSpent: "",
    remainingBudget: "",
    budgetDate: "",
  };

  getCategoryFromStorage = () => {
    const { categoryName } = this.categoryName;
    let nameCheck = localStorage.getItem(categoryName);
    if (nameCheck === null) {
      alert("This category name does not exist.");
    } else {
      const {
        categoryName,
        totalBudget,
        amountSpent,
        remainingBudget,
        budgetDate,
      } = JSON.parse(localStorage.getItem(categoryName));
      console.log(categoryName, totalBudget, amountSpent, remainingBudget, budgetDate);
    }
  };

  handleEdit = (e) => {
    // Can I add EditCategory here somehow?
  };

  handleDelete = (e) => {
    // Can I add DeleteCategory here?
  };

  render() {
    return (
      <div>
      <ul className="category-items">
        <h6>Category: {this.props.categoryName}</h6>
        <li>Total budget amount: {this.props.totalBudget}</li>
        <li>Total amount spent: {this.props.amountSpent}</li>
        <li>Total remaining budget: {this.props.remainingBudget}</li>
        <li>Budget created on: {this.props.budgetDate}</li>
        <button type="submit" className="category-button" onClick={this.handleEdit}>
          Edit
        </button>
        <button type="submit" className="category-button" onClick={this.handleDelete}>
          Delete
        </button>
      </ul>
    </div>
    )
  }
}

export default EditCategory;
