import React from 'react'

function QuestionThree() {
  const [counterA, setCounterA] = React.useState(0)
  const [counterB, setCounterB] = React.useState(0)

  /***
   * Fill the code here to log each counter value to console whenever their value change
   *   Only log counterA value if counterA's value changes
   *   Only log counterB value if counterB's value changes
   ***/

  React.useEffect(() => {
    if (counterA) {
      console.log(
        `Only log counterA value if counterA's value changes`,
        counterA,
      )
    }
  }, [counterA])

  React.useEffect(() => {
    if (counterB) {
      console.log(
        `Only log counterB value if counterB's value changes`,
        counterB,
      )
    }
  }, [counterB])

  return (
    <div>
      <h2>Question 3</h2>
      <p>Q: What should be filled in the code below?</p>
      <p>
        *Note: If you aren’t familiar with React Hooks, feel free to answer the
        way to do this in the class component.
      </p>

      <button onClick={() => setCounterA(counterA + 1)}>A</button>
      <button onClick={() => setCounterB((b) => b + 1)}>B</button>

      <p>A: Implement in QuestionThree.js</p>
    </div>
  )
}

export default QuestionThree
