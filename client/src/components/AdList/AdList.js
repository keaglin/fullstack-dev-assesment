import React from 'react'
import { Link } from 'react-router-dom'
import './AdList.css'

const AdList = (props) => {
  const ads = props.ads
  return (
    <div>
      {
        ads.map((ad, index) => {
          return (
            <Link to={{
              pathname: `/${ad.name}`,
              state: {ad: ad}
            }}>
              <li key={ad.id.toString()}>
                <div>
                  <h2>{ad.name}</h2>
                  <p>Goal: {ad.goal}</p>
                </div>
              </li>
            </Link>)
        })
      }
    </div>
  )
}

export default AdList