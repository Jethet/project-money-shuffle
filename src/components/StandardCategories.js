import React from "react";
import categoriesData from "../categoriesData";

class StandardCategories extends React.Component {
  state = {
    standardCategories: [],
  };

  componentDidMount() {}

  showStandardCategories = () => {
    this.standardCategories = JSON.parse(categoriesData);
    console.log(this.standardCategories);
    
    // standardCategories.map((item) => {
    //   return (

    //   )
    // })
  };

  render() {
    return (
      <div>
        <br />
      </div>
    );
  }
}

export default StandardCategories;
