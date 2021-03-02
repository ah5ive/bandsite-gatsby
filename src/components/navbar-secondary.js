import React from 'react'
import { Link } from "gatsby"

const SiteNav = () => {
  return(
    <>
      <nav id='navbar-sec' className='navbar navbar-sec navbar-expand-lg'>
        <div className="navbar-nav row align-items-center">
          <Link className='nav-item underline' activeClassName="active" to='/'>Home</Link>
          <Link className='nav-item underline' activeClassName="active" to='/404'>About us</Link>
          <Link className='nav-item underline' activeClassName="active" to='/404'>Discography</Link>
          <Link className='nav-item underline' activeClassName="active" to='/404'>Store</Link>
          <Link className='nav-item underline' activeClassName="active" to='/contact'>Contact us</Link>
        </div>
      </nav>
      <nav id='hamburger' className='navbar mobile navbar-expand-lg'>
        <div className='container'>
          <div className='ham navbar-toggle collapsed' type='button' data-toggle='collapse' data-target="#navbarToggler" aria-expanded='false'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div id='navbarToggler' className='collapse navbar-collapse'>
          <div className='container'>
            <div className="navbar-nav nav-mobile row">
              <Link className='mobile-nav-item' activeClassName="active" to='/'>Home</Link>
              <Link className='mobile-nav-item' activeClassName="active" to='/404'>About us</Link>
              <Link className='mobile-nav-item' activeClassName="active" to='/404'>Discography</Link>
              <Link className='mobile-nav-item' activeClassName="active" to='/404'>Store</Link>
              <Link className='mobile-nav-item' activeClassName="active" to='/contact'>Contact us</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default SiteNav