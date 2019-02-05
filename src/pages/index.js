import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { rhythm } from '../utils/typography'

class RootPage extends React.Component {
  render() {
    const siteTitle  = `About - ${get(this, 'props.data.site.siteMetadata.title')}`
    const twitterUrl = get(this, 'props.data.site.siteMetadata.twitterUrl')

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
  }
`
