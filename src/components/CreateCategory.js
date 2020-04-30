import React from "react";


class CreateCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "",
      totalBudget: 0,
      amountSpent: 0,
      remainingBudget: 0,
      budgetDate: null,
    };
  }

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
            <form>
              <div className="form-group">
                <label className="category-form-label">Name of Category</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter name of category"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label className="category-form-label">Total budget amount</label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Enter total amount"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label className="category-form-label">Date created:</label>
                <input className="form-control" type="date" name="date" />
              </div>
              <button type="submit" className="btn" style={{backgroundColor: "lightblue"}}>
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
