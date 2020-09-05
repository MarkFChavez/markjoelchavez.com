import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { rhythm } from '../utils/typography'

class RootPage extends React.Component {
  render() {
    const siteTitle  = get(this, 'props.data.site.siteMetadata.title')
    const twitterUrl = get(this, 'props.data.site.siteMetadata.twitterUrl')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const latestPost = posts[0].node

    return (
      <div>
        <Helmet title={siteTitle} />

        <div>
          <p style={{textAlign: 'justify'}}>
            Hi 👋🏼, my name is Mark! I'm a web developer who wants to be better at building 
            value-driven software that helps businesses be efficient. I think engineers should develop products with customers in mind but also be aware of the tradeoffs from technical decisions as well.
          </p>

          <p style={{textAlign: 'justify'}}>
            I want to share my thoughts about programming in general. But this is mostly a personal journal for whenever I need to recall a particular topic or concept because I'm quite forgetful! 😃
          </p>
        </div>
      
        <div>
          <p> You can check me out on <a href="https://twitter.com/markfchavez">twitter</a> and <a href="https://github.com/markfchavez">github</a>. </p>
        </div>

        <div style={{width: rhythm(1.5), borderBottom: '2px solid #333'}}>
        </div>

        <div style={{marginTop: rhythm(1.0)}}>
          <span>Latest read:</span>
          <a href={`/articles${latestPost.fields.slug}`}> {latestPost.frontmatter.title} </a>
        </div>
      </div>
    )
  }
}

export default RootPage

export const rootPageQuery = graphql`
  query rootPageQuery {
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
