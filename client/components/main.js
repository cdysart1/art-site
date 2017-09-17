import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const { children, handleClick, isLoggedIn } = props

  return (
    <div>

      <nav className="nav">
        <div>
          <h1>CAROL <span style={{ color: "red" }}>DYSART</span></h1>
        </div>
        {
          <div className="fontcolor">
            <Link to='/home'>Home</Link>
            {/* <Link to='/gallery'>Gallery</Link> */}
            <div className="dropdown">
              <button className="dropbtn">Gallery</button>
              <div className="dropdown-content">
                <Link to='/landscapes'>Landscapes</Link>
                <Link to='/figures'>Figures</Link>
                <Link to='/cityscapes'>Cityscapes</Link>
              </div>
            </div>
            <Link to='/aboutMe'>About</Link>
            <Link to='/contactMe'>Contact</Link>
          </div>

        }
      </nav>

      {children}
    </div>
  )
}

export default Main;


