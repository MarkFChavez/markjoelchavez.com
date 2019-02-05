import React from 'react'
import Link from 'gatsby-link'
import { rhythm } from '../utils/typography'
import profilePic from './profile-pic.png'
import NavigationLinks from './NavigationLinks'

class Header extends React.Component {
  render() {
    return (
      <div
        style={{ 
          marginBottom: rhythm(1),
          display: 'flex',
        }}
      >
        <img
          src={profilePic}
          alt={`Mark Chavez`}
          style={{
            marginRight: rhythm(1),
            width: rhythm(4),
            height: rhythm(4),
          }}
        />

        <NavigationLinks />
      </div>
    )
  }
}

export default Header
