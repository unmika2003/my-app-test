import React, { useState } from 'react'

const QuestionOne = () => {
  const number = [13, 1, 15, 2, 99, 87, 101, 555, -1, 11]

  let first, second

  if (number[0] < number[1]) {
    first = number[0]
    second = number[1]
  } else {
    first = number[1]
    second = number[0]
  }

  for (let i = 2; i < number.length; i = i + 2) {
    if (first > number[i]) {
      second = first
      first = number[i]
    } else {
      if (second > number[i]) {
        second = number[i]
      }
    }
  }

  return (
    <div>
      <h2>Question 1</h2>
      <p>
        Q 1.1: Given an array of integers. Find the first and second smallest
        integers from an array. You can answer this in either pseudocode or
        actual code in any programming languages.
      </p>
      <p>Example input: [13, 1, 15, 2, 99, 87, 101, 555, -1, 11]</p>
      <p>Expected output: The first smallest is -1 and the second is 1</p>
      <p>
        A: The first smallest is {first} and the second is {second}
      </p>
      <p>Q 1.2: What is the Big-O complexity of your solution in Q 1.1?</p>
      <p>A: O(n) : linear</p>
    </div>
  )
}

export default QuestionOne
