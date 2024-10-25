import React from 'react'
import Citation from './Citation'
import Rating from './Rating'
import rating_text from '../data/rating.json'
import OpenQuestion from './OpenQuestion'
import Test from './test'


const Feedback = () => {
    return (
        <div className='frame pd-frame bd-rd-20 fh quesps'>
            <h1 className='mb-20'>Rate Your Experience with </h1>
            <Citation />
            <Rating listings={rating_text}/>
            <OpenQuestion />
            <Test />
        </div>
  )
}

export default Feedback
