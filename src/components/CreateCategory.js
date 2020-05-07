import React from "react";

// How to save the data that is entered in the local storage?
// How add new Category to an array of existing category objects?

class CreateCategory extends React.Component {
    state = {
      categoryName: "",
      totalBudget: 0,
      amountSpent: 0,
      remainingBudget: 0,
      budgetDate: "",
    };


  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let newCategory = this.state;
    console.log(newCategory);

    this.setState({
      categoryName: "",
      totalBudget: 0,
      amountSpent: 0,
      remainingBudget: 0,
      budgetDate: "",
    });
  };

  render() {
    return (
      <div>
        <div className="category-container">
          <div className="category-form">
            <div id="category-header">
              <h3>Create new category</h3>
            </div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label className="category-form-label">
                    Name of category:
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter name of category"
                      autoComplete="off"
                      name="categoryName"
                      value={this.state.categoryName}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label className="category-form-label">
                    Total budget amount:
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Enter total amount"
                      autoComplete="off"
                      name="totalBudget"
                      value={this.state.totalBudget}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label className="category-form-label">
                    Total amount spent:
                    <input
                      className="form-control"
                      type="number"
                      placeholder="0"
                      autoComplete="off"
                      name="amountSpent"
                      value={this.state.amountSpent}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label className="category-form-label">
                    Total remaining budget:
                    <input
                      className="form-control"
                      type="number"
                      placeholder="0"
                      autoComplete="off"
                      name="remainingBudget"
                      value={this.state.remainingBudget}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label className="category-form-label">
                    Date created:
                    <input
                      className="form-control"
                      type="date"
                      name="budgetDate"
                      value={this.state.budgetDate}
                      onChange={this.handleChange}
                    />
                  </label>
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
