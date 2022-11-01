import React from 'react'
import {SocialCard} from './components/SocialCard'
import { StarsInfo } from './components/StarsInfo'

import coltonImg from './images/image-colton.jpg'
import anneImg from './images/image-anne.jpg'
import ireneImg from './images/image-irene.jpg'

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
      <div className='social__cards'>
        <SocialCard
          img={coltonImg}
          name='Colton Smith'
          text='We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!'
        />
        <SocialCard
          img={ireneImg}
          name='Irene Roberts'
          text='Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.'
        />
        <SocialCard
          img={anneImg}
          name='Anne Wallace'
          text='Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!'
        />
      </div>
    </main>
  )
}

export default App
