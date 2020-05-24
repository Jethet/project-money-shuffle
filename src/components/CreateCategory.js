import React from "react";

class CreateCategory extends React.Component {
 
  state = {
    categoryName: "",
    totalBudget: "",
    amountSpent: "",
    remainingBudget: "",
    budgetDate: "",
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { categoryName, totalBudget, amountSpent, remainingBudget, budgetDate } = this.state;

    let nameCheck = localStorage.getItem(categoryName);
    if (nameCheck === null) {
      // state is an object and can be stringified
      localStorage.setItem(categoryName, JSON.stringify({ categoryName, totalBudget, amountSpent, remainingBudget, budgetDate }));
    } else {
      alert("This category name already exists");
    }

    this.props.updateState(categoryName, totalBudget, amountSpent, remainingBudget, budgetDate)
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
                  <label htmlFor="categoryName" className="category-form-label">
                    Name of category:
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter name of category"
                      required
                      autoComplete="off"
                      name="categoryName"
                      value={this.state.categoryName}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="totalBudget" className="category-form-label">
                    Total budget amount:
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Enter total amount"
                      required
                      autoComplete="off"
                      name="totalBudget"
                      value={this.state.totalBudget}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="amountSpent" className="category-form-label">
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
                  <label htmlFor="remainingBudget" className="category-form-label">
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
                  <label htmlFor="budgetDate" className="category-form-label">
                    Date created:
                    <input
                      className="form-control"
                      type="date"
                      name="budgetDate"
                      required
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
                  Create new category
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
