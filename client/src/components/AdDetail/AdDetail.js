import React, { Component } from 'react'
import axios from 'axios'
import { CLIENT_URL } from '../../helpers/constants'
import PlatformContainer from '../PlatformContainer/PlatformContainer'

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
      if (prop !== 'platforms') {
        adProps.push([prop, ad[prop]])
      }
    }
    adProps.shift()

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
        <PlatformContainer platforms={ad.platforms} />
      </div>
    )
  }
}

export default AdDetail