import React, { Component } from 'react'
import axios from 'axios'
import { CLIENT_URL } from '../../helpers/constants'

class AdDetail extends Component {
  state = {
    ad: this.props.location.state.ad,
    toDashboard: false
  }

  getAd = () => {
    axios.get(`${CLIENT_URL}/${this.props.match.params.name}`)
      .then(res => this.setState({ad: res.data.ad}))
      .catch(err => console.log('Something went wrong', err))
  }
  render() {
    console.log(this.props.match.params.name)
    let ad = {}
    this.state.ad ? ad = this.state.ad : this.getAd()
    return (
      <div>
        <div>{ad.name}</div>
        <div>{ad.status}</div>
      </div>
    )
  }
}

export default AdDetail