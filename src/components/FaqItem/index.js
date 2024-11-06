// Write your code here.
import React, {useState} from 'react'
import './index.css'

const FaqItem = ({faq}) => {
  const {questionText, answerText} = faq
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(prevState => !prevState)
  }

  return (
    <li className="faq-item">
      <div className="faq-question-container">
        <h2 className="faq-question">{questionText}</h2>
        <button className="toggle-button" onClick={toggleAnswerVisibility}>
          <img
            src={
              isAnswerVisible
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={isAnswerVisible ? 'minus' : 'plus'}
          />
        </button>
      </div>
      {isAnswerVisible && <p className="faq-answer">{answerText}</p>}
    </li>
  )
}

export default FaqItem
