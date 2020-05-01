import React from "react";

import categoriesData from "./../categories.json";
import Category from "./Category";

// Map over existing instances of Category to display

class CategoryOverview extends React.Component {
  state = {
    categoryName: categoriesData.categoryName,
    totalBudget: categoriesData.totalBudget,
    amountSpent: categoriesData.amountSpent,
    remainingBudget: categoriesData.remainingBudget,
    budgetDate: categoriesData.budgetDate,
  };

  render() {

    const categoryComponents = categoriesData.map((item) => (
      <Category key={item.id} category={item} />
    ));

    return (
      <div>
        <h3>My Budget Categories</h3>
        {categoryComponents}
      </div>
    );
  }
}

export default CategoryOverview;
