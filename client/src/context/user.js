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
    const [plants, setPlants] = useState ({})

    useEffect(() => {
        fetch(`/users/id`)
        .then(res => res.json())
        .then(data => {
            setUser(data)
            if (data.error) {
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                getPlants()
            }
        })
    }, [])

    const getPlants = () => {
        fetch('/plants')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPlants(data)
        })
    }

    const addPlant = (plant) => {
        fetch('/plants', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(plant)
        })
        .then(res => res.json())
        .then(data => {
            setPlants([...plants, data])
        })
    }

    const login = (user) => {
        setUser(user)
        getPlants()
        setLoggedIn(true)
    }

    const logout = () => {
        setUser({})
        setPlants([])
        setLoggedIn(false)
    }

    const signup = (user) => {
        setUser(user)
        getPlants()
        setLoggedIn(true)
    }

    return (
        <UserContext.Provider value={{ user, login, logout, signup, loggedIn, plants, addPlant }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }; 

//This is what gives us global state.