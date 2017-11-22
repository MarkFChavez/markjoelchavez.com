import React from 'react'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1),
        }}
      >
        <img
          src={profilePic}
          alt={`Mark Chavez`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Hi, I'm Mark Chavez. Maintainer of <a href="https://github.com/mrkjlchvz/ex_swapi">swapi</a>, <a href="http://yamda.markjoelchavez.com/">yamda</a> and a whole bunch of open-source projects. Join
          me on my adventures as I unfold the good bits about software writing. You can also
          follow me on <a href="https://twitter.com/markisundefined">twitter</a> and <a href="https://github.com/mrkjlchvz">github</a> for more
          goodies. Also, I love <a href="https://twitter.com/search?q=%23oss">#oss</a>!
        </p>
      </div>
    )
  }
}

export default Bio
