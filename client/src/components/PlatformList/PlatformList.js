import React from 'react'

const PlatformList = (props) => {
  let platform = props.data
  let platformValue = Object.entries(platform[1])
  platformValue.shift()
  const displayCollection = (el) => {
    let propString = ''
    console.log('from displayCollection, the element we on is', el)
    Object.entries(el).map(prop => {
      propString = prop.join(': ')
      console.log('propString is', propString)
    })
    return (
      <div>
        <ul>
          <li>{propString}</li>
        </ul>
      </div>
    )
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