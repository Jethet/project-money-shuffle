import React from "react";
import CreateCategory from "./CreateCategory";

class CategoryOverview extends React.Component {
  state = {
    categoryList: []
  }

  // The new category is created and saved in local storage
  // To show a new category in the overview, retrieve from local storage
  addNewCategory = () => {
    let newCategoryList = [...this.state.categoryList]
    let newCategory = localStorage.getItem(newCategory);
    newCategoryList.push(newCategory)
    this.setState({categoryList: newCategoryList})
    console.log(this.state.categoryList)
  }

  render() {

    return (
      <div>
        {this.state.categoryList}
        <CreateCategory />
      </div>
    );
  }
}

export default CategoryOverview;
