import React from 'react';
import DefaultImg from '../assets/hero/hero.jpg';
export default function EmptyComponent({ description, image }) {
  return (
    <>
      <div>
        <div className='flex justify-center'>
          <img src={image || DefaultImg} alt='no_data_image' height={200} width={200} />
        </div>
        <div className='text-center font-semibold text-secondary'>{description}</div>
      </div>
    </>
  )
}
