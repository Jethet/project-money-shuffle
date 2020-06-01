import React from "react";
import CreateCategory from "./CreateCategory";
import ViewCategory from "./ViewCategory";
import StandardCategories from "./StandardCategories";
import CategoryOverview from "./CategoryOverview";
// import EditCategory from "./EditCategory"

// CategoryState has nothing to do with the other components: it only deals with the state.
// CategoryState makes the state available to other components and gets the changes back
// through callback functions

class CategoryState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oneCategory: {
        categoryName: "",
        totalBudget: "",
        amountSpent: "",
        remainingBudget: "",
        budgetDate: "",
      },
      categoryList: [],
    };
  }

  updateState = (categoryName, totalBudget, amountSpent, remainingBudget, budgetDate) => {
    this.setState({
      oneCategory: {
        categoryName: categoryName,
        totalBudget: totalBudget,
        amountSpent: amountSpent,
        remainingBudget: remainingBudget,
        budgetDate: budgetDate,
      },
    });
  };

  addNewCategory = (e) => {
    let categories = { ...this.state.categoryList };
    const { oneCategory } = e.target;
    categories.push(oneCategory);
    this.setState({ categoryList: categories });

    console.log(this.state.categoryList);
  };

  render() {
    return (
      <div>
        {/* <StandardCategories {...this.state}/> */}
        <CategoryOverview {...this.state} categoryList={this.state.categoryList} />

        <CreateCategory
          // {...this.state}
          updateState={this.updateState}
          addNewCategory={this.addNewCategory}
        />

        <ViewCategory {...this.state} />
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
