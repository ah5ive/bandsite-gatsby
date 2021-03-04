import React from "react"
import Article from "../components/article"
import Layout from "../components/layout"
import SectionPhoto from "../components/sectionPhoto"
import Section from "../components/section"

class Home extends React.Component {
 render () {
   return (
    <Layout>
      <div className='page page-home'>
        <Section className='sec sec-article'>
          <h2>Welcome...</h2>
          <div className='sec-article-title'>
            <h3>Finally we are back from a 6 year hiatus</h3>
          </div>
          <p>Our first digital  release “Home Coming” after a 6 year hiatus.</p>
          <div className="embed-responsive embed-responsive-16by9" style={{marginTop: '20px'}}>
            <iframe title="ah5ive The Band - Home Coming MV" className='embed-responsive-item' src="https://www.youtube.com/embed/HNpbCcMld_o?autoplay=1&loop=1&mute=1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </Section>
        <Article/>
        <SectionPhoto/>
      </div>
    </Layout>
   )
 }
}

export default Home;