import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction.js";

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignUp, setIsSignUp] = useState(true);
  console.log(loading);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpass: "",
    username: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    //name属性を含む要素の値をとる
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };
  //サインアップ時のパスワード作成に失敗した際にフォームを空にする。各要素にvalueを設定しておく
  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmpass: "",
      username: "",
    });
  };

  return (
    <div className="Auth">
      {/* left side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas</h6>
        </div>
      </div>
      {/* right side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Login"}</h3>
          {/* サインアップの時だけ名前の入力をする */}
          {isSignUp && (
            <div>
              <input
                type="text"
                className="infoInput"
                placeholder="First Name"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                className="infoInput"
                placeholder="Last Name"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              name="username"
              placeholder="Usernames"
              className="infoInput"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="infoInput"
              onChange={handleChange}
              value={data.password}
            />
            {/* サインアップの時だけパスワードの確認をする */}
            {isSignUp && (
              <input
                type="password"
                name="confirmpass"
                placeholder="Confirm Password"
                className="infoInput"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Confirm Password is not same
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account. LOGIN!"
                : "Dont have an account? Sign UP"}
            </span>
          </div>
          <button
            className="button infoButton"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
      {/* <SignUp /> */}
    </div>
  );
};

export default Auth;
