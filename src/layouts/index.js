import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import get from 'lodash/get'

import 'typeface-alegreya'
import 'typeface-alegreya-sans'
import '../css/prism-coy.css'
import { rhythm, scale } from '../utils/typography'

class Index extends React.Component {
  render() {
    const { location, children } = this.props
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    let header
    let rootPath = `/`

    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.2),
            textAlign: 'center',
            marginBottom: rhythm(1.5),
            marginTop: 0,
            fontWeight: 'bold'
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {siteTitle}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Alegreya Sans, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(1)
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {siteTitle}
          </Link>
        </h3>
      )
    }

    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children()}
      </Container>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
