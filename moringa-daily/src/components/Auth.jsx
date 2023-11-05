import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Navigate } from "react-router-dom";
import HttpsIcon from "@mui/icons-material/Https";
import MailLockOutlinedIcon from "@mui/icons-material/MailLockOutlined";

const Auth = () => {
  const [showRegister, setShowRegister] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const [password_change, setPassword_change] = useState();
  const [username_change, setUsername_change] = useState();
  const [email_change, setEmail_change] = useState();

  const toggleForm = () => {
    setShowRegister(!showRegister);
    setShowLogin(!showLogin);
  };

  const toggleViewPass = () => {
    setShowPass(!showPass);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    console.log(
      `username:${username_change} password:${password_change} email: ${email_change}`
    );

    fetch("http://127.0.0.1:5000/signup", {
      method: "POST",
      body: JSON.stringify({
        username: username_change,
        password: password_change,
        email: email_change,
        role: "user",
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      body: JSON.stringify({
        username: username_change,
        password: password_change,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((data) => Navigate("/"));
  };

  function handlePassword(event) {
    const value = event.target.value;
    setPassword_change(value);
  }

  function handleUsername(event) {
    const value = event.target.value;
    setUsername_change(value);
  }

  function handleEmail(event) {
    const value = event.target.value;
    setEmail_change(value);
  }

  return (
    <div
      style={{
        backgroundImage: `url('/assets/images/moringa-bg.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full auth-screen bg-slate-100 flex items-center justify-center"
    >
      <div className="md:w-3/5 rounded shadow grid grid-cols-1 md:grid-cols-4 transition-all duration-300 ease-in-out">
        <div className="col-span-1 md:col-span-2 bg-default-green py-4 px-8">
          <p className="text-slate-300">Welcome to</p>
          <h2 className="w-32 font-semibold text-default-gold text-4xl mt-3">
            <span className="uppercase text-5xl">Moringa</span> School
          </h2>
          <h4 className="text-white font-semibold text-2xl">Daily</h4>
          <p className="text-gray-400 text-sm pt-2">
            Your number one news resource for all things tech, powered and
            update by Moringa School team
          </p>

          <button
            className="bg-default-gold text-default-green text-md font-semibold rounded-full w-40 py-1 mt-3"
            onClick={toggleForm}
          >
            {showLogin ? " Sign Up" : showRegister && "Sign In"}
          </button>

          <div className="flex justify-between items-center mt-5"></div>
        </div>

        {showLogin && (
          <form className="col-span-1 md:col-span-2 bg-white p-4">
            <h4 className="text-gray-500 uppercase py-1 text-center md:text-start text-sm">
              Powered by:
            </h4>
            <img
              src="/assets/images/moringa-logo.png"
              alt="logo"
              className="h-12 mb-3 mx-auto"
            />
            <p className="text-xs text-slate-400 pr-6 text-center md:text-start">
              Sign in below if you have a registered account
            </p>

            <div className="w-full border rounded-full flex justify-center py-1 gap-3 mt-3">
              <PersonIcon className="w-1/5 text-slate-600 text-sm" />
              <input
                type="text"
                placeholder="Username or email"
                onChange={handleUsername}
                className="w-3/5 focus:outline-none text-sm"
              />
            </div>

            <div className="w-full border rounded-full flex justify-center py-1 gap-3 mt-3">
              <HttpsIcon className="w-1/5 text-slate-600 text-sm" />
              <input
                type="password"
                placeholder="Password"
                className="w-3/5 black focus:outline-none text-sm"
              />
            </div>
            <div className="flex justify-between items-center mt-3 gap-3">
              <div className="flex gap-1 text-md md:text-xs text-gray-400 items-center">
                <input type="checkbox" id="remember_me" />
                <label htmlFor="remember_me">Remember me</label>
              </div>
              <h6 className="text-gray-400 text-xs">Forgot password?</h6>
            </div>
            <div className="w-full flex justify-center">
              <button
                className="bg-default-gold text-default-green text-md rounded-full w-full md:w-4/5 py-1 mt-3"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </div>
            <p className="mt-3 text-center text-gray-400 text-md md:text-xs">
              New here?{" "}
              <span
                className="text-default-green font-semibold cursor-pointer"
                onClick={toggleForm}
              >
                Create Account
              </span>
            </p>
          </form>
        )}

        {showRegister && (
          <form className="col-span-1 md:col-span-2 bg-white p-4">
            <h4 className="text-gray-500 uppercase py-1 text-center md:text-start text-sm">
              Powered by:
            </h4>
            <img
              src="/assets/images/moringa-logo.png"
              alt="logo"
              className="h-12 mb-3 mx-auto"
            />
            <p className="text-xs text-slate-400 pr-6 text-center md:text-start">
              Sign up below if you don't have an account
            </p>
            <div className="w-full border rounded-full flex justify-center py-1 gap-3 mt-3">
              <MailLockOutlinedIcon className="w-1/5 text-slate-600 text-sm" />
              <input
                type="text"
                placeholder="Email"
                className="w-3/5 focus:outline-none text-sm"
                onChange={handleEmail}
              />
            </div>
            <div className="w-full border rounded-full flex justify-center py-1 gap-3 mt-3">
              <PersonIcon className="w-1/5 text-slate-600 text-sm" />
              <input
                type="text"
                placeholder="Username"
                onChange={handleUsername}
                className="w-3/5 focus:outline-none text-sm"
              />
            </div>

            <div className="w-full border rounded-full flex justify-center py-1 gap-3 mt-3">
              <HttpsIcon className="w-1/5 text-slate-600 text-sm" />
              <input
                type={`${showPass ? "text" : "password"}`}
                placeholder="Password"
                onChange={handlePassword}
                className="w-3/5 focus:outline-none text-sm"
              />
            </div>
            <div className="flex items-center mt-3 gap-3">
              <div
                className="flex gap-1 text-md md:text-xs text-gray-400 items-center"
                onClick={toggleViewPass}
              >
                <input type="checkbox" id="remember_me" />
                <label htmlFor="remember_me">Show Password</label>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button
                className="bg-default-gold text-default-green text-md rounded-full w-full md:w-4/5 py-1 mt-3"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
            <p className="mt-3 text-center text-gray-400 text-md md:text-xs">
              Already have account?{" "}
              <span
                className="text-default-green font-semibold cursor-pointer"
                onClick={toggleForm}
              >
                Sign In
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
