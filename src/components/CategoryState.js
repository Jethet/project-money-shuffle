import React from "react";
import CreateCategory from "./CreateCategory";
import ViewCategory from "./ViewCategory";
import StandardCategories from "./StandardCategories";
// import EditCategory from "./EditCategory"

// CategoryState has nothing to do with the other components: it only deals with the state.
// CategoryState makes the state available to other components and gets the changes back
// through callback functions

class CategoryState extends React.Component {
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

  updateState = (categoryName, totalBudget, amountSpent, remainingBudget, budgetDate) => {
    this.setState({
      categoryName: categoryName,
      totalBudget: totalBudget,
      amountSpent: amountSpent,
      remainingBudget: remainingBudget,
      budgetDate: budgetDate,
    });
  };

  viewCategoryFromStorage = () => {
    console.log("Find this");
    
    let category = this.state.categoryName;
    if (localStorage.getItem(category) === null) {
      console.log("Category does not exist.");
    } else {
      category = JSON.parse(localStorage.getItem(category));
    }
    console.log(category);
  };

  render() {
    return (
      <div>
        <StandardCategories viewCategoryFromStorage={this.viewCategoryFromStorage} />
        <CreateCategory
          {...this.state}
          updateState={this.updateState}
          // categoryName={this.state.categoryName}
          // totalBudget={this.state.totalBudget}
          // amountSpent={this.state.amountSpent}
          // remainingBudget={this.state.remainingBudget}
          // budgetDate={this.state.budgetDate}
          // updateState={this.updateState}
        />

        <ViewCategory
          {...this.state}
          viewCategoryFromStorage={this.viewCategoryFromStorage}
        />
        {/* <EditCategory
        categoryName={this.categoryName}
        totalBudget={this.totalBudget}
        amountSpent={this.amountSpent}
        remainingBudget={this.remainingBudget}
        budgetDate={this.budgetDate}
        /> */}
      </div>
    );
  }
}

export default CategoryState;
