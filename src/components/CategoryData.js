import React from 'react'
import categoriesData from "./../categories.json";

function CategoryData() {

  let [id, categoryName, totalBudget, amountSpent, remainingBudget, budgetDate] = categoriesData
  console.log(categoryName)

  return (
    <div>
      <p>Id: {categoriesData.id}</p>
      <p>Category: {categoriesData.categoryName}</p>
      <p>Total budget: {categoriesData.totalBudget}</p>
      <p>Total amount spent: {categoriesData.amountSpent}</p>
      <p>Remaining budget: {categoriesData.remainingBudget}</p>
      <p>Budget created on: {categoriesData.budgetDate}</p>
    </div>
  )
}

export default CategoryData