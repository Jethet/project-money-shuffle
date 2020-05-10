import React from "react";

// How to save the data that is entered in the local storage?
// How add new Category to an array of existing category objects?

class CreateCategory extends React.Component {
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

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      categoryName,
      totalBudget,
      amountSpent,
      remainingBudget,
      budgetDate,
    } = this.state;

    let nameCheck = localStorage.getItem(categoryName);
    if (nameCheck === null) {
      // state is an object and can be stringified
      localStorage.setItem(categoryName, JSON.stringify(this.state));
    } else {
      alert("This category name already exists");
    }

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
                  <label for="categoryName" className="category-form-label">
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
                  <label for="totalBudget" className="category-form-label">
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
                  <label for="amountSpent" className="category-form-label">
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
                  <label for="remainingBudget" className="category-form-label">
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
                  <label for="budgetDate" className="category-form-label">
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
