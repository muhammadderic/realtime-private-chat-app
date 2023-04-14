import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import AddAvatar from "../img/addAvatar.png";
import { useState } from "react";

function Register() {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    // const file = e.target[3].files[0];

    try {
      // Create User
      console.log(process.env.REACT_APP_FIREBASE_KEY);
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log({ errCode: errorCode, errMessage: errorMessage });
        });
    } catch (error) {
      setErr(true);
      console.error(error.message);
    }
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="title">
          <span className="logo">Deric Chat</span>
          <span className="subtitle">Register</span>
        </div>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Display name" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={AddAvatar} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span className="error-auth">Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register;