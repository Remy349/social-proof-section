import React from 'react'
import { StarsInfo } from './components/StarsInfo'

function App () {
  return (
    <main className='social'>
      <div className='social__info'>
        <div className='social__info-content'>
          <h1 className='social__info-content_title'>
            10,000+ of our users love our products.
          </h1>
          <p className='social__info-content_desc'>
            We only provide great products combined with excellent customer service.
            See what our satisfied customers are saying about our services.
          </p>
        </div>
        <div className='social__info-stars'>
          <StarsInfo
            rated='Rated 5 Stars in Reviews'
          />
          <StarsInfo
            rated='Rated 5 Stars in Report Guru'
          />
          <StarsInfo
            rated='Rated 5 Stars in BestTech'
          />
        </div>
      </div>
      <div className='social__cards'></div>
    </main>
  )
}

export default App
