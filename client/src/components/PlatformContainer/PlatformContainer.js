import React from 'react'
import PlatformDetail from '../PlatformDetail/PlatformDetail'

const PlatformContainer = (props) => {
  // let platforms = props.platforms
  let platforms = Object.entries(props.platforms)
  console.log('platforms is', platforms)
  platforms.shift()
  console.log('platforms after shift is', platforms)
  // console.log(Object.keys(platforms))
  // console.log(Object.entries(platforms).shift())
  return (
    <div>
      {
        platforms.map(plat => {
          return (
            <li><PlatformDetail name={plat[0]} data={plat[1]}/>
            </li>
          )
        })
      }
    </div>
  )
}

export default PlatformContainer