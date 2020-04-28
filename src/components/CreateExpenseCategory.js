import React from "react";

class CreateExpenseCategory extends React.Component {
  formData
   constructor(props) {
     super(props)

     this.state = {
      categoryName: "",
      amount: null,
      date: "",
    };
   }
  

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Information submitted: ${this.categoryName} ${this.amount}`);
    this.setState ({
      categoryName: "",
      amount: null,
      date: ""
    })
  };

  componentDidMount() {
    this.formData = JSON.parse(localStorage.getItem('form'))

    if(localStorage.getItem('form')) {
      this.setState({
        categoryName: this.formData.categoryName,
        amount: this.formData.amount,
        date: this.formData.date
      })
    } else {
      this.setState ({
        categoryName: '',
        amount: null,
        date: ''
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('form', JSON.stringify(nextState))
  }

  render() {
    return (
      <div className="">
        <div className="container">
          <div id="category-header">
            <h3>Create a new category of expenses</h3>
          </div>
          <div >
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="category-form-label">Category name</label>
                <input
                  className="form-control"
                  name="category"
                  type="text"
                  value={this.state.categoryName}
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
              <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateExpenseCategory;
