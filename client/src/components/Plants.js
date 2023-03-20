import React, {useEffect, useState} from 'react'

function Plants() {
    const[plants, setPlants] = useState([])



    useEffect(() => {
        fetch('/plants')
            .then(res => res.json())
            .then(data => {
                setPlants(data)
            })
    }, [])

    const plantList = plants.map(p => <li>{p.name}</li>)


    return (
        
        <div>
            <h1>Plants</h1>
            {plantList}
        </div>
    )
}

export default Plants