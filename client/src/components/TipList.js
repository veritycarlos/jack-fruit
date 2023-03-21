// import React, { useState, useEffect } from 'react'
// import TipLinks from './TipLinks'

// const TipList = () => {
//     const [tips, setTips] = useState([])

//     useEffect(() => {
//         fetch('/tips')
//             .then(res => res.json())
//             .then(data => {
//                 setTips(data)
//             })
//     }, [])

//     const tipsList = tips.map( t => <TipLinks key={t.id} tip={t} plant={t.plant}  />)

//     return (
//         <div>
//             <br/>
//             <h1>Tips:</h1>
//             <h3>
//                 {tipsList}
//             </h3>
//         </div>
//     )
// }

// export default TipList
const TipList = ({ tips }) => {

    const tipLis = tips ? tips.map((tip) => <li key={ tip.id }>{ tip.username } says: { tip.comment }</li>) : null
    
    return (
      <ul>
        { tipLis }
      </ul>
    )
  }
  
  export default TipList