import React from 'react'

function Home(props) {
  return (
    <div className="container my-3" style={{ color: props.Mode === "dark" ? "white" : "#03102e" }}>
      <h1>Working Progress!</h1>
    </div>
  )
}

export default Home
