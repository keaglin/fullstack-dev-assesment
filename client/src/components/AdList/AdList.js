import React from 'react'
import './AdList.css'

const AdList = (props) => {
  const ads = props.ads
  return (
    <div>
      {
        ads.map((ad, index) => {
          return (
            <li key={index}>
              <div>
                <h2>{ad.name}</h2>
                <p>Goal: {ad.goal}</p>
              </div>
            </li>)
        })
      }
    </div>
  )
}

export default Adlist