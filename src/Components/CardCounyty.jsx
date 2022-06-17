import React from 'react'

const CardCounyty = ({u}) => {
  console.log(u)
  return (
    <article className='Card'>
        <img src={u.flags.png} alt="" />
        <h2><b>Country </b>  </h2>
        <p> <b>Capital:</b>   </p>

    </article>
  )
}

export default CardCounyty