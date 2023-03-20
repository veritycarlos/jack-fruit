//ENOCH
// const baseUrl = 'http://localhost:3000'

// export const getCurrentUser = async (handleCurrentUser) => {
//    const resp = await fetch(baseUrl + '/current-user')
//    const data = await resp.json()

//         handleCurrentUser(data);
// }

// export const login = async (details) => {
//     const resp = await fetch(baseUrl + '/login', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(details)
//     })

//     const data = await resp.json();

//     console.log(data)
// }

//NANCY START
import React, { useState, useEffect} from 'react'

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    // const [stories, setStories] = useState ({})

    useEffect(() => {
        fetch(`/users/id`)
        .then(res => res.json())
        .then(data => {
            setUser(data)
            if (data.error) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                // getStories()
            }
        })
    }, [])

    const login = (user) => {
        setUser(user)
//         getStories()
        setLoggedIn(true)
    }

    const logout = () => {
        setUser({})
//         setStories([])
        setLoggedIn(false)
    }

    const signup = (user) => {
        setUser(user)
//         getStories()
        setLoggedIn(true)
    }

    return (
        <UserContext.Provider value={{ user, login, logout, signup, loggedIn }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }; 

//This is what gives us global state.

//NANCY

//     const getStories = () => {
//         fetch('/stories')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             setStories(data)
//         })
//     }

//     const addStory = (story) => {
//         fetch('/stories', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json'},
//             body: JSON.stringify(story)
//         })
//         .then(res => res.json())
//         .then(data => {
//             setStories([...stories, data])
//         })
//     }

//     const login = (user) => {
//         setUser(user)
//         getStories()
//         setLoggedIn(true)
//     }

//     const logout = () => {
//         setUser({})
//         setStories([])
//         setLoggedIn(false)
//     }

//     const signup = (user) => {
//         setUser(user)
//         getStories()
//         setLoggedIn(true)
//     }

//     return (
//     <UserContext.Provider value={{ loggedIn, stories, addStory}} >
