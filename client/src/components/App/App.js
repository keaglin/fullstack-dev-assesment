import React, { Component } from 'react';
import './App.css';
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
    console.log(ads)
    // ads.forEach(ad => console.log(ad))
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
