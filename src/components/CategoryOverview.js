import React from "react";
import CreateCategory from "./CreateCategory";
import StandardCategories from "./StandardCategories";
import categoriesData from "./../categoriesData.js";


class CategoryOverview extends React.Component {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     categories: categoriesData,
  //   };
  // }

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
        {/* {this.state.categoryList} */}
        <CreateCategory />
      </div>
    );
  }
}

export default CategoryOverview;
