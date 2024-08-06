import React, { useState } from 'react'
import Login from './Login'
import Dashboard from "./Dashboard";

export default function DashboardApp() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  return (
    <div>
      {loggedIn ? <Dashboard setLoggedIn={setLoggedIn} /> : <Login setLoggedIn={setLoggedIn}/>}
    </div>
  )
}
