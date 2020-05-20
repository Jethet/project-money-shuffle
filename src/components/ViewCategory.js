import React from "react";

class ViewCategory extends React.Component {
  state = {
    category: this.props.category
  }

  getCategoryFromStorage = () => {
    let category = this.state;
    if (localStorage.getItem(category) === null) {
      console.log("Category does not exist.");
    } else {
      category = JSON.parse(localStorage.getItem(category));
    }
    console.log(category);

    // return category;
    // this.setState()    DO THIS WITH DECONSTRUCTING?
  };

  handleEdit = (e) => {
    // Can I add EditCategory here somehow?
  };

  handleDelete = (e) => {
    // Can I add DeleteCategory here?
  };

  render() {
    return (
      <div>
        <h6>Category: {this.category.categoryName}</h6>
        <li>Total budget amount: {this.category.totalBudget}</li>
        <li>Total amount spent: {this.category.amountSpent}</li>
        <li>Total remaining budget: {this.category.remainingBudget}</li>
        <li>Budget created on: {this.category.budgetDate}</li>
        <button
          type="submit"
          className="btn btn-sm btn-outline-primary py-0"
          style={{ backgroundColor: "lightblue", color: "black", border: "none" }}
          onClick={this.handleEdit}
        >
          Edit
        </button>
        <button
          type="submit"
          className="btn btn-sm btn-outline-primary py-0"
          style={{ backgroundColor: "lightblue", color: "black", border: "none" }}
          onClick={this.handleDelete}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default ViewCategory;
