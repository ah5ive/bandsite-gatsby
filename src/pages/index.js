import React from "react"
import Article from "../components/article"
import Layout from "../components/layout"
import SectionPhoto from "../components/section"

class Home extends React.Component {
 render () {
   return (
    <Layout>
      <div className='page page-home'>
        <section className="sec sec-intro sec-coming-soon">
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <h3>Finally we are back...</h3>
                <p>Our first digital  release “Home Coming” after a 6 year hiatus.</p>
                <div className="embed-responsive embed-responsive-16by9" style={{marginTop: '20px'}}>
                  <iframe title="ah5ive The Band - Home Coming MV" className='embed-responsive-item' src="https://www.youtube.com/embed/HNpbCcMld_o?autoplay=1&loop=1&mute=1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Article/>
        <SectionPhoto/>
      </div>
    </Layout>
   )
 }
}

export default Home;