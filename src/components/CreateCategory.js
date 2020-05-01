import React from "react";

class CreateCategory extends React.Component {
  state = {
    categoryName: "",
    totalBudget: 0,
    amountSpent: 0,
    remainingBudget: 0,
    budgetDate: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let newCategory = this.state;
    console.log(newCategory);

    this.setState = {
      categoryName: "",
      totalBudget: 0,
      budgetDate: "",
    };
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // How add new Category to an array of existing category objects?

  render() {
    return (
      <div>
        <div className="category-form">
          <div className="container">
            <div id="category-header">
              <h3>Create new category</h3>
            </div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label className="category-form-label">Name of Category</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter name of category"
                    autoComplete="off"
                    name="category"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="category-form-label">Total budget amount</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Enter total amount"
                    autoComplete="off"
                    name="budget"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="category-form-label">Date created:</label>
                  <input
                    className="form-control"
                    type="date"
                    name="date"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn"
                  style={{ backgroundColor: "lightblue" }}
                >
                  Create new
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCategory;
