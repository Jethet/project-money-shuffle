import React from "react"

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light" style={{backgroundColor: "lightblue"}}>
       <a className="navbar-brand" href="#">
        <img src="/images/homelink.png" width="25" height="25" alt="Home" />
       </a>
      </nav>
    </div>
  )
}


export default Navbar