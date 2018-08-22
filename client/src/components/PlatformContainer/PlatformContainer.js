import React        from 'react'
import PlatformList from '../PlatformList/PlatformList'

const PlatformContainer = (props) => {
  let platforms = props.platforms
  platforms = Object.entries(platforms)
  platforms.shift()

  let platProps = []
    for (let prop in platforms) {
      if (typeof(platforms[prop]) !== 'object') {
        platProps.push([prop, platforms[prop]])
      }
    }

  return (
    <div>
      <p>Platforms:</p>
      {
        platforms.map(plat => {
          return (
            <li>
              {plat[0]}:
              <PlatformList data={plat}/>
            </li>
          )
        })
      }
    </div>
  )
}

export default PlatformContainer