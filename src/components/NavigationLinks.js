import React from 'react'
import Link from 'gatsby-link'
import { rhythm } from '../utils/typography'

class NavigationLinks extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{fontWeight: 'bold', marginTop: rhythm(1/2)}}> Mark Chavez </h1>
        <div style={{display: 'flex'}}>
          <div style={{marginRight: rhythm(1/2)}}> 
            <Link 
              exact
              to='/' 
              activeStyle={{fontWeight: 'bold', color: '#333'}}
              style={{color: 'grey'}}>
              <span>about</span>
            </Link>
          </div>

          <div style={{marginRight: rhythm(1/2)}}> 
            <Link 
              to='/articles/'
              activeStyle={{fontWeight: 'bold', color: '#333'}}
              style={{color: 'grey'}}>
              <span>articles</span>
            </Link>
          </div>

          <div style={{marginRight: rhythm(1/2)}}> 
            <Link 
              exact
              to='/projects/'
              activeStyle={{fontWeight: 'bold', color: '#333'}}
              style={{color: 'grey'}}>
              <span>projects</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NavigationLinks

