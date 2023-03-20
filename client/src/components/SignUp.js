//   function handleSubmit(e) {
//     e.preventDefault();
//     const formData = {
//       username,
//       password,
//       passwordConfirmation
//     };
//     fetch("/campers", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((camper) => {
//           setUsername("");
//           setPassword("");
//           setPasswordConfirmation("");
//           setErrors([]);
//           onAddCamper(camper);
//         });
//       } else {
//         r.json().then((err) => setErrors(err.errors));
//       }
//     });
//   }

//   return (
//     <>
//         <h2>SignUp</h2>
//         <form onSubmit={handleSubmit}>
//         <div>
//             <label htmlFor="username">Username: </label>
//             <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//         </div>
//         <br/>
//         <div>
//             <label htmlFor="password">Password: </label>
//             <input
//             type="text"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             />
//         </div>
//         <br/>
//         <div>
//                 <label htmlFor="password_confirmation">Password Confirmation: </label>
//                 <input
//                     type="password"
//                     id="password_confirmation"
//                     value={passwordConfirmation}
//                     onChange={(e) => setPasswordConfirmation(e.target.value)}
//                 />
//         </div>
//         <br/>
//         {errors.map((err) => (
//             <p key={err} style={{ color: "red" }}>
//             {err}
//             </p>
//         ))}
//         <button type="submit">Submit</button>
//         </form>
//     </>
//   );
// }

// export default Signup
import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    //const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const {signup} = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup', {
            // config obj
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
              //  what we're sending to backend
                username: username,     
                password: password
                //password_confirmation: passwordConfirmation

            })
        })
        .then(res => res.json())
        .then(user => {
            if (!user.errors) {
                signup(user)
                navigate ('/')
            } else {
                setUsername("")
                setPassword("")
                //setPasswordConfirmation("")
                const errorLis = user.errors.map(e => <li>{e}</li>)
                setErrorsList(errorLis)
            }            
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input 
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /> <br/>
                <label>Password: </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <br/>
                {/* <label>Confirm Password: </label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                /> <br/> */}
                <input type="submit" />
            </form>
            <ul>
                {errorsList}
            </ul>
        </div>
    )
}

export default SignUp