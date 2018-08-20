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
      console.log('typeof ad[prop] is', typeof(ad[prop]))
      if (typeof(ad[prop]) !== 'object') {
        adProps.push([prop, ad[prop]])
      }
    }
    adProps.shift()

    return (
      <div>
        <ul>
          {
            adProps.map(prop => {
              // wanna capitalize the first letters in prop[0] 
              // need to get all data displaying before 
              // worrying about formatting
              return (
                <li key={prop[0]}>
                  {prop[0]}: {prop[1]}
                </li>
              )
            })
          }
          <PlatformContainer platforms={ad.platforms} />
        </ul>
      </div>
    )
  }
}

export default AdDetail