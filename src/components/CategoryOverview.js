import React from 'react'
import CreateExpenseCategory from "./CreateExpenseCategory"


class CategoryOverview extends React.Component {


  render() {
    return (
      <div className="category-overview">
      <h1>Your expense categories</h1>
      <h3>Food & Drink</h3>
      <h3>Housing</h3>
      <h3>Clothing</h3>
      <h3>Transportation</h3>
      <h3>Leisure & sports</h3>
      <br/><br/>

      </div>
    )
  }
}


export default CategoryOverview;