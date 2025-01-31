import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
        <div className="logo">Food cart</div>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/Card"}>View Cart</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header