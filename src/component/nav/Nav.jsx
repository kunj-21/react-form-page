import React from 'react'

import Style from'./Nav.module.css'

const Nav = () => {
  return (
    <nav className={`${Style.Nav} container`}>
    <div >
        <img src="./img/Frame 2 1.png" alt="frame" />
    </div>
    <ul>
      <li><a href="#">HOME</a></li>
      <li><a href="#">ABOUT</a></li>
      <li><a href="#">CONTACT</a></li>
    </ul>
    </nav>
  )
}

export default Nav