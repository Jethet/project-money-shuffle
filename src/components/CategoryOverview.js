import React from "react";
import CreateCategory from "./CreateCategory";
import StandardCategories from "./StandardCategories";
import categoriesData from "./../categoriesData.js";
import CategoryState from "./CategoryState"


class CategoryOverview extends React.Component {

  // The new category is created and saved in local storage
  // How add the new category to the existing list of categories?
  // How add the StandardCategories to this list?
  

  render() {

    return (
      <div>
      {categoriesData.map((category) => {
          return (
            <StandardCategories
              key={category.categoryName}
              category={category}
            />
          );
        })
        }
        <CategoryState />
        {/* {this.state.categoryList} */}
        <CreateCategory />
      </div>
    );
  }
}

export default CategoryOverview;
