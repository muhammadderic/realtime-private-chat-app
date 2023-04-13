import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="title">
          <span className="logo">Deric Chat</span>
          <span className="subtitle">Login</span>
        </div>
        <form>
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <button>Log in</button>
        </form>
        <p>
          You don't have an account? <Link>Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login;