import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { rhythm } from '../utils/typography'

class ArticlesPage extends React.Component {
  render() {
    const siteTitle = `Articles - ${get(this, 'props.data.site.siteMetadata.title')}`
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />

        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          const postUrl = `/articles${node.fields.slug}`

          return (
            <div>
              <div 
                key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link 
                    style={{ boxShadow: 'none', color: '#333', fontWeight: 'bold' }} 
                    to={postUrl}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>

              <div style={{width: rhythm(1.5), borderBottom: '2px solid #333'}}>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ArticlesPage

export const articlesPageQuery = graphql`
  query articlesPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
