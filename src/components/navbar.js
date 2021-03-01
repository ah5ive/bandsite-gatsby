import React from 'react'
import SiteNav from './navbar-secondary'
import {Link} from 'gatsby'
// import useStateProvider from '../context/context'

const Navbar = () => {
  return (
    <header className="header">
      <div className="fluid-container">
        <div className="row align-items-center">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg">
              <Link to='/' className="logo navbar-brand"><img src="../../images/logo/logo.svg" alt=""/></Link>
              <div className="container">
                <ul className="navbar-nav row align-items-center ml-lg-auto">
                  <li className="nav-item"> <Link to='/' className="nav-link logo"><img src="../../images/logo/logo.svg" alt=""/></Link></li>
                  <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/ah5ivetheband" target="_blank" rel="noreferrer"><img src="../../images/logo/facebooklogo.svg" alt='facebook'/></a></li>
                  <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/ah5ivetheband" target="_blank" rel="noreferrer"><img src="../../images/logo/instagramlogo.png" alt='instagram'/></a></li>
                  <li className="nav-item"><a className="nav-link" href="https://www.youtube.com/c/ah5ivetheband" target="_blank" rel="noreferrer"><img src="../../images/logo/youtubelogo.svg" alt='youtube'/></a></li>
                  <li className="nav-item"><a className="nav-link" href="https://music.apple.com/sg/artist/ah5ive-the-band/639241824" target="_blank" rel="noreferrer"><img src="../../images/logo/itunelogo.svg" alt='itune'/></a></li>
                  <li className="nav-item"><a className="nav-link" href="https://open.spotify.com/artist/7xeAey43hE64qU2CaN759N" target="_blank" rel="noreferrer"><img src="../../images/logo/spotifylogo.svg" alt='spotify'/></a></li>
                  <li className="nav-item"><a className="nav-link" href="https://www.kkbox.com/sg/en/artist/wPYPlgLVNoVADk0F0cxLN08K-index-1.html" target="_blank" rel="noreferrer"><img src="../../images/logo/kkboxlogo.png" alt='kkbox'/></a></li>
                </ul>
              </div>
            </nav>
            <div className="col-12">
              <SiteNav/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;