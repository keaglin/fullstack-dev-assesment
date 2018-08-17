import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import { CLIENT_URL } from '../../helpers/constants'

class App extends Component {
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
      <div className="App">
        {
          ads.map((ad, index) => {
            return (
              <li key={index}>
                <div>
                  <h2>{ad.name}</h2>
                  <p>Goal: {ad.goal}</p>
                </div>
              </li>)
          })
        }
      </div>
    )
  }
}

export default App;
