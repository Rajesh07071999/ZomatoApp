import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import { useState } from "react";
import LoginPopUp from "./Pages/LoginPopup/LoginPopUp";
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from "./Components/Footer/Footer";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  console.log("showLogin app component", showLogin);
  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Order" element={<PlaceOrder />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default App;
