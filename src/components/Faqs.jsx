import React, { useState } from 'react';
// import { accordionData } from './utils/content';
import { faqs } from '../utils/faqsData';

const Faqs = () => {
  const [clickedIndex, setClickedIndex] = useState(0);

  const clickHandler = (index) => {
    if(clickedIndex === index) {
      return setClickedIndex(null);
    }
    setClickedIndex(index);
  }

  return (
    <>
    <div className='title mb-5 text-center'>Frequently Asked Questions</div>
    {faqs.map((item, index) => (
    <div className="accordion" key={index}>
      <div className={`accordion-title ${index===clickedIndex ? '' : 'add-border'}`} onClick={() => clickHandler(index)}>
        <div>{item.question}</div>
        <div className='accordion-action'>{index===clickedIndex ? '-' : '+'}</div>
      </div>
      {index===clickedIndex ? <div className="accordion-content">{item.answer}</div> : null}
    </div>
    ))}
    </>
  );
};

export default Faqs;
