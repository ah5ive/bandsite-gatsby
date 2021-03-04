import React from 'react'
import Layout from "../components/layout"
import Section from "../components/section"
import SectionPhoto from "../components/sectionPhoto"
import { useSiteMetadata } from "../hooks/staticQuery"


const Discography = () => {
  const data = useSiteMetadata()
  const assetPath = '../../images/albums/'
  // data from hooks
  console.log(data, 'data')
  const albumsArray = data.en.albums
  const album = albumsArray.map((item, index) => 
  <div className="card" key={index}>
    <div className='img-container'>
      <img src={assetPath + item.albumimage} alt={item.title}/>
    </div>
    <div className="card-body">
       <h4>{item.title}</h4>
      <p className="card-text">{item.description}</p>
      {/* <ul className='card-list'>{item.songtitle.map((title, index) => <li key={index}><p>{title}</p></li>)}</ul> */}
    </div>
  </div>
    )
// populate with array.map()
  return (
    <Layout>
    <div className='page page-home'>
      <Section className='sec sec-article'>
        <h2>Discography</h2>
          <div className='sec-article-content add-padding-top'>
            {album}
        </div>
      </Section>
      <SectionPhoto/>
    </div>
    </Layout>
  )
}

export default Discography