import React from 'react'
import './PlatformList.css'

const PlatformList = (props) => {
  let platform = props.data
  let platformValue = Object.entries(platform[1])
  platformValue.shift()
  const displayCollection = (el) => {
    let propString = ''
    return Object.entries(el).map(prop => {
      console.log('prop[0] is', prop[0])
      console.log(`prop[0] === 'image' is`, prop[0] === 'image')
      if (prop[0] === 'image') {
        return (
          // `THIS IS A TEST`
          <div>
            {/* TEST */}
            <ul>
              <li>image: <img src={require(`../../../public/images/${prop[1]}`)} alt={prop[1]} /></li>
            </ul>
          </div>
        )
      }
      else {
        console.log('img condition failed')
        propString = prop.join(': ')
        console.log(propString)
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