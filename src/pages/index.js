import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { rhythm } from '../utils/typography'

class RootPage extends React.Component {
  render() {
    const siteTitle  = `About - ${get(this, 'props.data.site.siteMetadata.title')}`
    const twitterUrl = get(this, 'props.data.site.siteMetadata.twitterUrl')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const latestPost = posts[0].node

    return (
      <div>
        <Helmet title={siteTitle} />

        <div>
          <p>
            I'm <a href="https://twitter.com/MarkFChavez">@MarkFChavez</a>, a web developer who likes to build 
            value-driven software that helps businesses become more efficient. Products should be developed with 
            customers in mind and that's what I want to be better at in this never-ending journey.
          </p>

          <p>
            I share my thoughts about programming in general. Keeping a journal of the things I've learned 
            is one of the best investments I'm going to make.
          </p>

          <p>
            And most importantly, I get to share it with you all!
          </p>
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
