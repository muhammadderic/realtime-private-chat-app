import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setErr(false);
      navigate("/");
    } catch (error) {
      console.error(error.message);
      setErr(true);
    }
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="title">
          <span className="logo">Deric Chat</span>
          <span className="subtitle">Login</span>
        </div>
        <form onSubmit={handleSubmit}>
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <button>Log in</button>
          {err && <span className="error-auth">username or password is wrong</span>}
        </form>
        <p>
          You don't have an account? <Link>Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login;