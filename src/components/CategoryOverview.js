import React from "react";
import StandardCategories from "./StandardCategories";
import categoriesData from "./../categoriesData.js";

class CategoryOverview extends React.Component {
  
  // How add the new category to the existing list of categories?
  // How add the StandardCategories to this list?

  // getCategoryFromStorage = () => {
  //   let category = this.props.category.categoryName;
  //   console.log(category);

  //   let nameCheck = localStorage.getItem(category);
  //   if (nameCheck !== null) {
  //     const {
  //       categoryName,
  //       totalBudget,
  //       amountSpent,
  //       remainingBudget,
  //       budgetDate,
  //     } = JSON.parse(localStorage.getItem(category));
  //     console.log(categoryName, totalBudget, amountSpent, remainingBudget, budgetDate);
  //   } else {
  //     alert("This category name does not exist.");
  //   }
  // };

  render() {
    return (
      <div>
        {categoriesData.map((category) => {
          return (
            <StandardCategories
              key={category.categoryName}
              category={category}
              getCategoryFromStorage={this.getCategoryFromStorage}
            />
          );
        })}
        {this.props.categoryList}
      </div>
    );
  }
}

export default CategoryOverview;
