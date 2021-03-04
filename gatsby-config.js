/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    en :  {
      albums: [
        {
          id: 1,
          title: 'PLAYSpeak',
          description: 'Song showcase on "October Movement” Compilation',
          songtitle: ['Awaken'],
          albumimage: 'playspeak.jpg'
        },
        {
          id: 2,
          title: 'Sound out Against Sex Trafficking',
          description: 'Singapore Chinese Band Compilation. A Chinese Band Compilation for an Indie Chinese Music Movement.',
          songtitle: ['Help me'],
          albumimage: 'soundoutalbum.jpg'
        },
        {
          id: 3,
          title: '谁能到最后一刻',
          description: '2009 Single from the band',
          songtitle: ['谁能到最后一刻'],
          albumimage: 'lastmanstanding.jpg'
        },
        {
          id: 4,
          title: 'Return To Base',
          description: '2010 Singapore Chinese Band Compilation. A Chinese Band Compilation for an Indie Chinese Music Movement.',
          songtitle: ['谁能到最后一刻', 'Help me', 'SuperFreak'],
          albumimage: 'returntobase.jpg'
        },
        {
          id: 5,
          title: '爱要及时',
          description: 'A band single featuring two love song composed by the band. Physical release in a form of a vintage letter envelope during the launch in the Live for The Moment Movement.',
          songtitle: ['期待(抒情版)', '爱来的太晚'],
          albumimage: 'lovecometoolatealbum.jpg'
        },
        {
          id: 6,
          title: '让我们感受那炽热的光',
          description: 'ah5ive The Band’s debut full-length album. This is a 9 track alternative rock album, write about regrets in life and stay strong through the hard times.',
          songtitle: ['悬挂', '自我消失日记','小红帽','期待', '情绪病', '看吧!这逐渐腐烂的地球', '谁是凶手', "Hunter's Love", 'Awaken'],
          albumimage: 'awakenalbum.jpg'
        },
        {
          id: 7,
          title: '梦捕手',
          description: 'ah5ive The Band’s 2nd full-length album. This album leans towards the Japan Rock music genre. It writes about positive energy in life show how life is wonderful',
          songtitle: ['地图', '拯救','向前冲','儿时梦', '晴空', '你的气息', 'Nights', '誓不低头', '燃烧瞬间', '一念之差'],
          albumimage: 'dreamcatcheralbum.jpg'
        },
        {
          id: 8,
          title: '情绪病 Remix',
          description: 'A remix song from the first album. The band is experimenting with the electronic music genre.',
          songtitle: ['地图', '拯救','向前冲','儿时梦', '晴空', '你的气息', 'Nights', '誓不低头', '燃烧瞬间', '一念之差'],
          albumimage: 'qxbremixsingle.jpg'
        }
      ]
    }
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    }
  ]
}