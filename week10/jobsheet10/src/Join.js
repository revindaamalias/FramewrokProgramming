import React, { useState, useContext } from "react";
import { AuthContext } from "./index";
import firebase from "firebase";

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) Auth.setLoggedIn(true);
      })
      .catch((e) => {
        setErrors(e.message);
      });
  };
  const googleJoin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
        Auth.setLoggedIn(true);
      });
  };

  return (
    <div>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={(e) => handleForm(e)}>
            <h1>Join</h1>
            <button
              class="googleBtn"
              type="button"
              onClick={() => googleJoin()}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="logo"
              />
              Join With Google
            </button>

            <button type="submit">Join</button>

            <span>{error}</span>
            <hr />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
              type="password"
              placeholder="password"
            />
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Login
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
