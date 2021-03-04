import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(query)
  return site.siteMetadata
}

export const query = graphql`
  query AlbumQuery {
    site {
      siteMetadata {
        en {
          albums {
            id
            title
            description
            songtitle
            albumimage
          }
        }
      }
    }
  }
`
