import React from "react";
import CreateCategory from "./CreateCategory";
import ViewCategory from "./ViewCategory"
import EditCategory from "./EditCategory"

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

  render() {
    return (
      <div>
        <CreateCategory state={this.state} />
        <ViewCategory state={this.state} />
        <EditCategory state={this.state} />

      </div>
    )
  }
}


export default CategoryState