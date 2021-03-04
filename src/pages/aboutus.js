import React from 'react'
import Layout from "../components/layout"
import Section from "../components/section"
import SectionPhoto from "../components/sectionPhoto"

export default function contact() {
  return <Layout>
          <div className='page page-home'>
            <Section className='sec sec-article'>
              <h2>About us</h2>
            </Section>
            <SectionPhoto/>
          </div>
        </Layout>
}