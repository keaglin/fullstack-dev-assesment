import React, { Component } from 'react'

class AdDetail extends Component {
  state = {
    ad: this.props.location.state.ad || [],
    toDashboard: false
  }

  getAd = () => {
    // get the ad requested and store in state
  }
  render() {
    if (ad) let ad = this.state.ad
    else getAd()
    return (
      <div></div>
    )
  }
}

export default AdDetail