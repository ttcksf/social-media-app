import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas</h6>
        </div>
      </div>
      <LogIn />
      {/* <SignUp /> */}
    </div>
  );
};
function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account Sign up
          </span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}
function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="First Name"
            name="firstname"
          />
          <input
            type="text"
            className="infoInput"
            placeholder="Last Name"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Usernames"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="infoInput"
          />
          <input
            type="text"
            name="confirmpass"
            placeholder="Confirm Password"
            className="infoInput"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. LOGIN!
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Sinup
        </button>
      </form>
    </div>
  );
}

export default Auth;
