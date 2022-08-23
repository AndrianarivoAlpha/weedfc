import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Fragment>
      <Link to="/">
          <h1 style={{
            color: "var(--dark)",
            marginLeft: "20pt",
            fontSize:"2rem",
            padding: "3px",
            border: "4px solid var(--dark)"
          }}>W</h1>
        </Link>
    </Fragment>
    
  )
}

export default Logo