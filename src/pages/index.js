import React from "react"
import Layout from "../components/layout"
import SectionPhoto from "../components/section"

const Home = () => {
  return  <Layout>
            <div className='page page-home'>
              <section className="sec sec-intro sec-coming-soon">
                <SectionPhoto/>
              </section>
            </div>
          </Layout>
}

export default Home;