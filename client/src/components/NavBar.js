import React, { useContext} from 'react'
import { UserContext } from '../context/user'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const {user, logout, loggedIn} = useContext(UserContext)
    const navigate = useNavigate()

    const logoutUser = () => {
        fetch('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

    if (loggedIn) {
        return (
            <div>
                <button onClick={logoutUser}>Logout</button>
                <hr/>
                <h1>Welcome {user.username}</h1>
            </div>
        )
    } else {
        return (
            <div>
                <NavLink to='/login'>
                    <button>Login</button>
                </NavLink>
                <NavLink to='/signup'>
                    <button>Signup</button>
                </NavLink>
                <NavLink to='/plants'>
                    <button>Plants</button>
                </NavLink>
                <hr/>
            </div>
        )
    } 

}

export default Navbar







// const NavBar = () => {

//     const link = {
//         width: '100px',
//         padding: '12px',
//         margin: '0 6px 6px',
//         textDecoration: 'none',
//         color: 'white',
//         background: 'black'
//     }
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
//         return (
//             <div>
//             <br/>
//                 <nav>
//                     <NavLink 
//                         to='/'
//                         style={link}
//                     >Home</NavLink>

//                     <NavLink 
//                         to='/plants'
//                         style={link}
//                     >Plants</NavLink>

//                     <NavLink 
//                         to='/login'
//                         style={link}
//                     >Login</NavLink>

//                     <NavLink 
//                         to='/'
//                         style={link}
//                     >Plants</NavLink>
//                 </nav>


//             </div>
//         )

// }

// export default NavBar
