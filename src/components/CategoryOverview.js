import React from "react";
import Category from "./Category";

class CategoryOverview extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   categoryName: "",
    //   amount: 0,
    //   date: "",
    // };
  }

  render() {

    return (
      <div>
        <Category />
      </div>
    );
  }
}

export default CategoryOverview;
