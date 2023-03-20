import React from "react";
import { Route, Routes } from 'react-router-dom'
import Plants from "./Plants";
import { UserProvider } from "../context/user";
import Home from "./Home";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Plant from "./Plant"

function App() {
  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route exact path="/plants" element = {<Plants />} />
          <Route exact path="/plants/:id" element = {<Plant />} />
          <Route exact path="/signup" element = {<SignUp />} />
          <Route exact path="/login" element = {<LogIn />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
