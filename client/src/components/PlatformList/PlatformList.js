import React from 'react'

const PlatformList = (props) => {
  let platform = props.data
  // console.log('props is', props)
  // console.log('data is', props.data)

  // let platArr = []
  let platformValue = Object.entries(platform[1])
  platformValue.shift()
  // console.log('platformValue is', platformValue)
  // loop through the array
  // take the 2nd index data[1] and run it through Object.entries
  // and we wanna take THAT and render it prolly
  const displayCollection = (el) => {
    // if (typeof(el) === 'object') {
      let propString = ''
      console.log('from displayCollection, the element we on is', el)
      Object.entries(el).map(prop => {
        // console.log('from displayCollection, prop is', prop)
        // console.log('from displayCollection, prop.toString is', prop.join(': '))
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
    // }
  }

  
  return (
    <div>
      <ul>
        {
          platformValue.map(plat => {
            // console.log('plat is', plat)
            // displayCollection(plat[1])
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