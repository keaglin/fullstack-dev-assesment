import React from 'react'
import PlatformDetail from '../PlatformDetail/PlatformDetail'

const PlatformContainer = (props) => {
  let platforms = props.platforms
  console.log(Object.keys(platforms))
  console.log(Object.entries(platforms))
  return (
    <div>
      {
        Object.entries(platforms).map(plat => {
          return (
            <li>{plat[0]}: <PlatformDetail data={plat[1]}/>
            </li>
          )
        })
      }
    </div>
  )
}

export default PlatformContainer