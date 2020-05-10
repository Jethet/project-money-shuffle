import React from "react";
import CreateCategory from "./CreateCategory";
import StandardCategories from "./StandardCategories"

class CategoryOverview extends React.Component {
  state = {
    categoryList: []
  }

  addNewCategory = (catObject) => {
    let newCategoryList = [...this.state.categoryList]
    newCategoryList.push(catObject)
    this.setState({categoryList: newCategoryList})
    console.log(this.categoryList)
  }

  render() {

    return (
      <div>
        <CreateCategory newCategory={this.addNewCategory} />

      </div>
    );
  }
}

export default CategoryOverview;
