import React from 'react'

export const SocialCard = (props) => {
  return (
    <article className='social__cards-card'>
      <div className='social__cards-card_header'>
        <img
          className='social__cards-card_header_img'
          src={props.img}
          alt=''
        />
        <div className='social__cards-card_header_container'>
          <p>{props.name}</p>
          <span>Verified Buyer</span>
        </div>
      </div>
      <p className='social__cards-card_text'>
        "{props.text}"
      </p>
    </article>
  )
}
