import React from 'react'
import Sharing from './sharing'

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sharing: {
        itune: "https://music.apple.com/sg/artist/ah5ive-the-band/639241824",
        spotify: "https://open.spotify.com/artist/7xeAey43hE64qU2CaN759N",
        kkbox: "https://www.kkbox.com/sg/en/artist/wPYPlgLVNoVADk0F0cxLN08K-index-1.html"
      }
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <section className='sec sec-article'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='sec-article-title'>
                <h2>Home Coming</h2>
              </div>
              <div className='sec-article-content'>
                <p className='js-eng'>This is an instrumental track in the album. It serves as an intro of the album with the intent of expressing Homecoming. Visualising us drifting in space, it is time for us to regroup and head back to earth. </p>
                <p className='js-eng'>This is an expression and a simple statement that WE ARE BACK! The start with a movie soundtrack like anthem beats and in the mid there is some mood change to express trouble time in midway of coming back and then successfully reach home.</p>
                <Sharing propsSharing={this.state.sharing}/>
              </div>
          </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Article;