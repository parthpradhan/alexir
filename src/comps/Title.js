import React from 'react';
import logo from '../assets/logo.png';
const Title = () => {
  return (
    <div className="main" id="main">
      <div className="black-box">
        <p className="text">
        I love all forms of art and design!
        </p>
      </div>
      <div className="header-box">
      <img className='logo' src={logo}alt="logo"/>
        <div className="links temp">
          <a className="link" alt="link" href="https://parthpradhan.github.io/soulx/">SoulX</a>
        </div>
        <div className="links">
          <a className="link" alt="link" href="https://www.linkedin.com/in/parth-shankar-pradhan-584b761aa/">LinkedIn</a>
        </div>
        <div className="links">
          <a className="link" alt="link" href="https://www.instagram.com/thesoulfrost/">Instagram</a>
        </div>
        <div className="links">
          <a className="link" alt="link" href="https://in.pinterest.com/TheParthPradhan/_created/">Pinterest</a>
        </div>
      </div>
      <div className="bold-box">
        <h1 className='bold-text'>I LOVE MAKING ART AND ANIMATIONS</h1>
        <div className="row-box">
        <p>RAISE YOUR VIBE!</p>
        </div>
      </div>
    </div>
  )
}

export default Title;