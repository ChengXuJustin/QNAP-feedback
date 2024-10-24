import React from 'react'
import Citation from './Citation'
import Rating from './Rating'
import rating_text from '../data/rating.json'
import OpenQuestion from './OpenQuestion'


const Feedback = () => {
    return (
        <div className='frame pd-frame bd-rd-20 fh quesps'>
            <h1 className='mb-20'>Rate Your Experience with </h1>
            <Citation />
            <Rating listings={rating_text}/>
            <OpenQuestion />
        </div>
  )
}

export default Feedback