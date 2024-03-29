import { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";
function LoginPopUp({ setShowLogin }) {
  console.log("showLogin app component", setShowLogin);

  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-screen">
      <form className="login-form-controller">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? (
            <></>
          ) : (
            <>
              <input type="text" placeholder="Enter Your Name" required />
            </>
          )}
          <input type="email" placeholder="Enter Your Email" required />
          <input type="password" placeholder="Enter Your Password" required />
        </div>
        <button>{currState === "Login" ? "Login" : "Create An Account"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p style={{marginTop:"3px"}}>By continuing , I agree terms and conditions</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create new account ?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account ?{" "}
            <span onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopUp;
