import React from "react";

class CreateExpenseCategory extends React.Component {
  state = {
    categoryName: "",
    amount: 0,
    date: "",
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Information submitted: ${this.categoryName} ${this.amount}`);
    let newExpenseCategory = this.state;
    console.log(newExpenseCategory);

    this.setState({
      categoryName: "",
      amount: 0,
      date: "",
    });
  };

  render() {
    return (
      <div className="new-category-form">
        <div className="container">
          <div id="category-header">
            <h3>Create a new category of expenses</h3>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="category-form-label">Category name</label>
                <input
                  className="form-control"
                  type="text"
                  name="category"
                  // value={this.state.categoryName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label className="category-form-label">Budget amount</label>
                <input
                  className="form-control"
                  name="amount"
                  type="number"
                  value={this.state.amount}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label className="category-form-label">Date:</label>
                <input
                  className="form-control"
                  type="date"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateExpenseCategory;
