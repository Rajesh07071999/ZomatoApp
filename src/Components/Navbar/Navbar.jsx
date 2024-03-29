import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("Home");
  const getTotalCartAmount = useContext(StoreContext)


  
  return (
    <div className="navbar">
      <Link to="/">
        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Zomato_Logo.svg/2560px-Zomato_Logo.svg.png" alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile_App")}
          className={menu === "Mobile_App" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#contact-us"
          onClick={() => setMenu("Contact_Us")}
          className={menu === "Contact_Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
        <Link to="/Cart">
        <img src={assets.basket_icon} alt="basket icon" />
        </Link>
          <div className={Object.keys(getTotalCartAmount.cartItem).length > 0 ? 'dot' : ''}></div>
        </div>
        <button onClick={() => setShowLogin(true)} className="nav-button">
          Signin
        </button>
      </div>
    </div>
  );
}

export default Navbar;
