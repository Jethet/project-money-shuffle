import React from "react";

import categoriesData from "./categories.json";
import Category from "./Category";
import StandardCategories from "./StandardCategories";

// Map over existing instances of Category to display

class CategoryOverview extends React.Component {

  render() {

    

    return (
      <div>
        <h3>My Budget Categories</h3>
        <StandardCategories />
        {/* {categoryComponents} */}
      </div>
    );
  }
}

export default CategoryOverview;
