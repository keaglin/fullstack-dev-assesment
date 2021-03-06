import React    from 'react'
import { Link } from 'react-router-dom'
import './AdList.css'

const AdList = (props) => {
  const ads = props.ads
  return (
    <div>
      {
        ads.map((ad) => {
          return (
            <Link to={{
              pathname: `/${ad.name}`,
              state: {ad: ad}
            }}>
              <li key={ad.id.toString()}>
                <div>
                  <h3>{ad.name}</h3>
                </div>
              </li>
            </Link>)
        })
      }
    </div>
  )
}

export default AdList