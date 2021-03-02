import React from 'react';

const Section = (props) => {
  return(
  <section className={props.className}>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          {props.children}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section;