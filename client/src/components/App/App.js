import React             from 'react'
import { Switch, Route } from 'react-router-dom'
import AdContainer       from '../AdContainer/AdContainer'
import AdDetail          from '../AdDetail/AdDetail'


const App = () => {
  return (
    <Switch>
      <Route exact path='/' render={(props) => (<AdContainer {...props}/>)}/>
      <Route path='/:name'  render={(props) => (<AdDetail {...props}/>)}/>
    </Switch>
  )
}

export default App
