import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import get from 'lodash/get'
import Header from '../components/Header'
import '../css/gatsby-overrides.css'
import { rhythm, scale } from '../utils/typography'

class Index extends React.Component {
  render() {
    const { location, children } = this.props
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Container
        style={{
          display: 'flex',
          maxWidth: rhythm(22),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <div>
          <Header />
          {children()}
        </div>
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
