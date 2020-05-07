import React from 'react'
import categoriesData from "./categories.json";
import Category from "./Category"

function StandardCategories() {
    
  const fixedCategories = categoriesData.map((item) => (
    <Category key={item.id} category={item} />
  ));

  return (
    <div>
    {fixedCategories}
    </div>
  )
}

export default StandardCategories