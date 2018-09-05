import React, { Component } from 'react'
import axios                from 'axios'
import { CLIENT_URL }       from '../../helpers/constants'
import AdList               from '../AdList/AdList'
import './AdContainer.css'

class AdContainer extends Component {
  state = {
    ads: []
  }

  componentDidMount() {
    axios.get(CLIENT_URL)
      .then(res => this.setState({ads: res.data.ads}))
  }
  render() {
    let ads = this.state.ads
    return (
      <div className="AdContainer">
      <h2>Active Campaigns</h2>
        <AdList ads={ads} />
      </div>
    )
  }
}

export default AdContainer
