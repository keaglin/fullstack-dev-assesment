import React from 'react'
import PlatformList from '../PlatformList/PlatformList'

const PlatformContainer = (props) => {
  let platforms = props.platforms
  // let platforms = Object.entries(props.platforms)
  platforms = Object.entries(platforms)
  // console.log('platforms is', platforms)
  platforms.shift()
  // console.log('platforms after shift is', platforms)
  // console.log(Object.keys(platforms))
  // console.log(Object.entries(platforms).shift())
  // const objToArr = (obj) => {
  //   return Object.entries(obj)
  // }
  let platProps = []
    for (let prop in platforms) {
      // console.log('typeof ad[prop] is', typeof(ad[prop]))
      if (typeof(platforms[prop]) !== 'object') {
        platProps.push([prop, platforms[prop]])
      }
    }
  // adProps.shift()
  return (
    <div>
      <p>Platforms:</p>
      {
        platforms.map(plat => {
          return (
            <li>
              {plat[0]}:
              {/* <PlatformList name={plat[0]} data={plat[1]}/> */}
              <PlatformList data={plat}/>
            </li>
          )
        })
      }
    </div>
  )
}

export default PlatformContainer