// import React, { useContext} from 'react'
// import { UserContext } from '../context/user'
// import { NavLink, useNavigate } from 'react-router-dom'

// const NavBar = () => {
//     const {user, logout, loggedIn} = useContext(UserContext)
//     const navigate = useNavigate()

//     const logoutUser = () => {
//         fetch('/logout', {
//             method: 'DELETE',
//             headers: { 'Content-Type': 'application/json'}
//         })
//         .then(() => {
//             logout()
//             navigate('/')
//         })
//     }

//     if (loggedIn) {
//         return (
//             <div>
//                 <button onClick={logoutUser}>Logout</button>
//                 <NavLink to='/stories'>
//                     <button>Stories</button>
//                 </NavLink>
//                 <h1>Welcome {user.username}</h1>
//                 <br/>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <NavLink to='/login'>
//                     <button>Login</button>
//                 </NavLink>
//                 <NavLink to='/signup'>
//                     <button>Signup</button>
//                 </NavLink>
//                 <hr/>
//             </div>
//         )
//     } 

// }

// export default NavBar
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    const link = {
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        textDecoration: 'none',
        color: 'white',
        background: 'black'
    }
    // const {user, logout, loggedIn} = useContext(UserContext)
    // const navigate = useNavigate()

    // const logoutUser = () => {
    //     fetch('/logout', {
    //         method: 'DELETE',
    //         headers: { 'Content-Type': 'application/json'}
    //     })
    //     .then(() => {
    //         logout()
    //         navigate('/')
    //     })
    // }
        return (
            <div>
            <br/>
                <nav>
                    <NavLink 
                        to='/'
                        style={link}
                    >Home</NavLink>

                    <NavLink 
                        to='/plants'
                        style={link}
                    >Plants</NavLink>

                    <NavLink 
                        to='/login'
                        style={link}
                    >Login</NavLink>

                    <NavLink 
                        to='/Signup'
                        style={link}
                    >Signup</NavLink>
                </nav>


            </div>
        )

}

export default NavBar
