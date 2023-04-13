import { Link } from "react-router-dom";
import Add from "../img/add.png";

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="title">
          <span className="logo">Deric Chat</span>
          <span className="subtitle">Register</span>
        </div>
        <form>
          <input required type="text" placeholder="Display name" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>
          You do have an account? <Link>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register;