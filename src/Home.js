import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="exercise">
      <h2>Exercise</h2>
      <p><Link to={"/pokemon"}>Take One</Link> </p>
      <p><Link to={"/boxes"}>Take Two</Link> </p>
      <p><Link to={"/todo"}>Take Three</Link> </p>
    </div>
  )
}

export default Home
