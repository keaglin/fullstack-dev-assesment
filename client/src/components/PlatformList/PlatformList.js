import React from 'react'
import './PlatformList.css'

const PlatformList = (props) => {
  let platform = props.data
  let platformValue = Object.entries(platform[1])
  platformValue.shift()
  const displayCollection = (el) => {
    let propString = ''
    return Object.entries(el).map(prop => {
      if (prop[0] === 'image') {
        return (
          <div>
            <ul>
              <li>image: <img src={require(`../../../public/images/${prop[1]}`)} alt={prop[1]} /></li>
            </ul>
          </div>
        )
      }
      else {
        propString = prop.join(': ')
        return (
          <div>
            <ul>
              <li>{propString}</li>
            </ul>
          </div>
        )
      }
    })
  }
  
  return (
    <div>
      <ul>
        {
          platformValue.map(plat => {
            return (
              <li>
                {plat[0]}: {typeof(plat[1]) !== 'object' ? plat[1] : displayCollection(plat[1])}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default PlatformList