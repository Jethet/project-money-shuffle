import React from "react";

import categoriesData from "./../categories.json"
import Category from "./Category";

// Map over existing instances of Category to display

function CategoryOverview() {
  const categoryComponents = categoriesData.map(item => <Category key={item.id} category={item} />)
  
  return (
    <div>
    <h3>My Budget Categories</h3>
      {categoryComponents}
    </div>
  );
}

export default CategoryOverview;
