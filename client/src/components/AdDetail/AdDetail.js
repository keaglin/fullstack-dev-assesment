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
      // console.log('typeof ad[prop] is', typeof(ad[prop]))
      if (typeof(ad[prop]) !== 'object') {
        adProps.push([prop, ad[prop]])
      }
    }
    // console.log('adProps array is', adProps)
    // need to stub this logic out to a function to be used on
    // all the Object-typed pieces of data
    // function should take the object as an argument
    // it also needs to know how to deal with arrays within 
    // the given object
    // use Object.entries() on all the objects
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