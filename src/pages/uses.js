import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { rhythm } from '../utils/typography'

class UsesPage extends React.Component {

  render() {
    const siteTitle = `Uses - ${get(this, 'props.data.site.siteMetadata.title')}`

    return (
      <div>
        <Helmet title={siteTitle} />

        <h3 style={{fontWeight: 'bold'}}> Hardware </h3>
        <ul>
          <li> iPhone XR for everyday use. This phone is supeeer reliable! </li>
          <li> My daily laptop is a 2019 MacBook Pro 16" with 16GB of RAM and a whooping 1TB of SSD storage. </li>
          <li> I use <a href="https://nexstand.eu/products/nexstand-k2">NEXSTAND</a> for my setup. I bring this wherever I go! </li>
          <li> I type on a <a href="https://www.amazon.com/Logitech-K380-Multi-Device-Bluetooth-Keyboard/dp/B0148NPH9I">K380 Logitech Keyboard</a> which I find to be surprisingly durable and fun to use. </li>
          <li> I use <a href="https://www.amazon.com/Logitech-Master-Wireless-Mouse-High-precision/dp/B00TZR3WRM">Logitech MX Master</a> for all things (e.g. gaming, coding, etc) </li>
          <li> <a href="https://www.amazon.com/Ricoh-GR-II-Digital-Camera/dp/B00ZY9JJEU">Ricoh GR II</a> for photography (I mostly do street) </li>
        </ul>
      </div>
    )
  }

}

export default UsesPage
