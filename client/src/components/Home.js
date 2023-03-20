// import React from 'react'

// function Home() {
//   return (
//     <div>
//         <h1>Home</h1>
//     </div>
//   )
// }

// export default Home

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import SignUp from "./SignUp";
import React, { useContext } from "react";
import { UserContext } from "../context/user";


function Home() {
    const { user, loggedIn } = useContext(UserContext);

    if( loggedIn ) {
        return (
            <div>
                <h3> {user.username}'s Home Page </h3>
            </div>
        )
    } else {
        return (
            <div>
                <h3> Please Login or Signup </h3>
            </div>
        )
    }
}

export default Home
//   const [campers, setCampers] = useState([]);
//   const [activities, setActivities] = useState([]);

//   useEffect(() => {
//     fetch("/plants")
//       .then((r) => r.json())
//       .then(setActivities);
//   }, []);

//   useEffect(() => {
//     fetch("/users")
//       .then((r) => r.json())
//       .then(setCampers);
//   }, []);

//   function handleAddCamper(newCamper) {
//     setCampers((campers) => [...campers, newCamper]);
//   }

//   function handleDeleteActivity(id) {
//     fetch(`/activities/${id}`, {
//       method: "DELETE",
//     }).then((r) => {
//       if (r.ok) {
//         setActivities((activities) =>
//           activities.filter((activity) => activity.id !== id)
//         );
//       }
//     });
//   }

//   return (
//     <div>
//       <h2>Activities</h2>
//       <ul>
//         {activities.map((activity) => (
//           <li key={activity.id}>
//             <span>
//               {activity.name} | Difficulty: {activity.difficulty}
//             </span>
//             <button onClick={() => handleDeleteActivity(activity.id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//       <hr />
//       <h2>Campers</h2>
//       <ul>
//         {campers.map((camper) => (
//           <li key={camper.id}>
//             <span>
//               {camper.name}, age {camper.age}
//             </span>
//             <Link to={`/campers/${camper.id}`}>View Activities</Link>
//           </li>
//         ))}
//       </ul>
//       <hr />
//       <SignUp onAddCamper={handleAddCamper} />
//     </div>
//   );
// }

// export default Home;