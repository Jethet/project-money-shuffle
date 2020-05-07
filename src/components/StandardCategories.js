import React from 'react'

function StandardCategories(props) {
  
  const mappedCategories = props.fixedCategories.map((category) => {
    return mappedCategories
  })

  return (
    <div>
      <h6>Category name: {this.mappedCategories.name}</h6>
      <h6>Total budget: {this.mappedCategories.totalBudget}</h6>
      <h6>Total amount spent: {this.mappedCategories.amountSpent}</h6>
      <h6>Total remaining budget: {this.mappedCategories.remainingBudget}</h6>
      <h6>Budget created on: {this.mappedCategories.budgetDate}</h6>
    </div>
  )
}

export default StandardCategories