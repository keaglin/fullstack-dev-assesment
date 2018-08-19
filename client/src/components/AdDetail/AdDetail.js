import React, { Component } from 'react'
import axios from 'axios'
import { CLIENT_URL } from '../../helpers/constants'
import Platform from '../Platform/Platform'

class AdDetail extends Component {
  state = {
    ad: this.props.location.state.ad
  }

  getAd = () => {
    axios.get(`${CLIENT_URL}/${this.props.match.params.name}`)
      .then(res => this.setState({ad: res.data.ad}))
      .catch(err => console.log('Something went wrong', err))
  }
  render() {
    let ad = {}
    this.state.ad ? ad = this.state.ad : this.getAd()
    let adProps = []
    for (let prop in ad) {
      console.log('prop from for loop', prop)
      console.log('ad[prop] from for loop', ad[prop])
      if (prop !== 'platforms') {
        adProps.push([prop, ad[prop]])
      }
    }
    console.log(adProps)
    return (
      <div>
        {
          adProps.map(prop => {
            return (
              <li key={prop[0]}>
                {prop[0]}: {prop[1]}
              </li>
            )
          })
        }
        {/* <div>{ad.name}</div>
        <div>{ad.status}</div> */}
        <Platform platforms={ad.platforms} />
      </div>
    )
  }
}

export default AdDetail