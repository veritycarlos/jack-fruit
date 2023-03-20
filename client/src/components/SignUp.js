// import React from 'react'

// function SignUp() {
//   return (
//     <div>
//         <h1>SignUp</h1>
//     </div>
//   )
// }

// export default SignUp
import { useState } from "react";

function Signup({ onAddCamper }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      username,
      password,
      passwordConfirmation
    };
    fetch("/campers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((camper) => {
          setUsername("");
          setPassword("");
          setPasswordConfirmation("");
          setErrors([]);
          onAddCamper(camper);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username: </label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <br/>
        <div>
            <label htmlFor="password">Password: </label>
            <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <br/>
        <div>
                <label htmlFor="password_confirmation">Password Confirmation: </label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
        </div>
        <br/>
        {errors.map((err) => (
            <p key={err} style={{ color: "red" }}>
            {err}
            </p>
        ))}
        <button type="submit">Submit</button>
        </form>
    </>
  );
}

export default Signup