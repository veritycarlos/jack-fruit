import React, {useEffect, useState } from 'react'
import { useParams, NavLink, useNavigate} from 'react-router-dom'

function Plant() {
    const[plant, setPlant] = useState([])
    const [plants, setPlants] = useState([])
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/plants/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setPlant(data)
            })
    }, [])

    const deletePlant = e => {
        fetch(`/plants/${ params.id }`, {method: "DELETE"})
        .then(res => res.json())
        .then (data => { 
            removePlant(params.id)
            navigate(`/plants`)
        })       
    }

    const removePlant = id => {
        setPlants(plants.filter( p => p.id != id))
    }


    // const plantDetails = plant.map(p => <li>{p.name}</li>)

    return (
        <div>
            <h1>Plants</h1>
            <h3>{plant.name}</h3>
            <img src={plant.image} alt="plant_photo" />
            <button onClick={ () => deletePlant( plant.id )}>Delete</button>
            <p><NavLink to={`/plants/${plant.id}/edit`}>Edit Plant</NavLink></p>
        </div>
    )
}

export default Plant

