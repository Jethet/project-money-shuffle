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

  render() {
    return <div></div>;
  }
}

export default EditCategory;
