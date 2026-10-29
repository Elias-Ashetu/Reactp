
import { useState } from "react";
import "./login.css";

function Login() {
  // Choose which form to show
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="form-box">

        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            alert(isLogin ? "Login submitted!" : "Signup submitted!");
          }}
        >

          {/* Show name only on Signup */}
          {!isLogin && (
            <input
              type="text"
              placeholder="Enter your name"
              required
            />
          )}

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>

        </form>

        <p>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            className="switch-button"
            type="button"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

      </div>
    </div>
  );
}

export default Login;
