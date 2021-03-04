import React from 'react'

const Sharing = ({ propsSharing }) => {
  return(
    <div className='platform-share'>
      <h4>Available in major streaming platform:</h4>
      <ul className='sharing-list'>
        <li><a href={propsSharing.itune} target="_blank" rel="noreferrer"><img src="../../images/logo/itunelogo.svg" alt='itune'/></a></li>
        <li><a href={propsSharing.spotify} target="_blank" rel="noreferrer"><img src="../../images/logo/spotifylogo.svg" alt='spotify'/></a></li>
        <li><a href={propsSharing.kkbox} target="_blank" rel="noreferrer"><img src="../../images/logo/kkboxlogo.png" alt='kkbox'/></a></li>
      </ul>
  </div>
  )
}

export default Sharing;