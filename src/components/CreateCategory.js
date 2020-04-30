import React from "react";

function CreateCategory(props) {
// How add new Category to an array of existing category objects?
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
                <label className="category-form-label">Date:</label>
                <input className="form-control" type="date" name="date" />
              </div>
              <button type="submit" className="btn btn-block" style={{backgroundColor: "lightblue"}}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCategory;
