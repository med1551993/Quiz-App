import React from 'react'

const Result = ({countCorrectAnswers}) => {
  return (
    <>
        <p>
            You got <stong>{countCorrectAnswers}</stong> correct answer(s) !
        </p>
        <p>Thank you for playing!</p>
    </>
  )
}

export default Result