import React, { useState } from 'react'
import { FaMicrophoneAlt, FaImage, FaVideo, FaTextHeight, FaTelegramPlane } from "react-icons/fa";

const OpenQuestion = () => {

  const [text, setText] = useState('')
  const [method, setMethod] = useState('')

  const feedbackMethod = [
    "<FaTextHeight />",
    "<FaMicrophoneAlt />",
    "<FaImage />",
    "<FaVideo />"
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {text}
    console.log(blog);
  }

  return (
    <div>
      <h2 className='mb-10'>How can we further enhance your experience?</h2>
      <form action="" onSubmit={handleSubmit}>
        <textarea
          name="open-question"
          id=""
          placeholder='Please tell us your opinion. To help you protect your privacy, please do not contain any personal information(Eg: your name or address).'
          className='fw textAreah bd-rd-5 pd-10'
          onChange={(e) => setText(e.target.value)}
        />
        {/* <div>
          <ul className='fw df pd-0'>
            <li className={`pd-10 mg-r`}><FaTextHeight /></li>
            <li className='pd-10 mg-r'><FaMicrophoneAlt /></li>
            <li className='pd-10 mg-r'><FaImage /></li>
            <li className='pd-10 mg-r'><FaVideo /></li>
          </ul>
        </div> */}
        <div>
          {/* {`${feedbackMethod.map(methodItem, index)}`} */}
          {feedbackMethod.map(methodItem, index)}
        </div>
        <div className='df fw jc-fe'>
          <button className='sm-btn df aln-tm-ct jc-sb'>
            Submit<FaTelegramPlane className='mg-l-10'/>
          </button>
        </div>
      </form>
    </div>
  )
}

export default OpenQuestion