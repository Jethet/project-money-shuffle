import React from 'react'
import CreateExpenseCategory from './CreateExpenseCategory'


class CategoryOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryName: "",
      amount: 0,
      date: "",
    };
  }

  // componentDidMount() {
  //   this.expenseData = JSON.parse(localStorage.getItem("data"));

  //   if (localStorage.getItem("data")) {
  //     this.setState({
  //       categoryName: this.expenseData.categoryName,
  //       amount: this.expenseData.amount,
  //       date: this.expenseData.date,
  //     })
  //   } else {
  //     this.setState({
  //       categoryName: "",
  //       amount: 0,
  //       date: "",
  //     });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   localStorage.setItem("data", JSON.stringify(prevState));
  // }


  render() {
    return (
      <div className="category-overview">
      <h1>Your expense categories</h1>
      <h3>Food & Drink</h3>
      <h3>Housing</h3>
      <h3>Clothing</h3>
      <h3>Transportation</h3>
      <h3>Leisure & sports</h3>
      
      <h3>
        <CreateExpenseCategory newExpenseCategory={this.newExpenseCategory} />
      </h3>

      <br/><br/>

      </div>
    )
  }
}


export default CategoryOverview;