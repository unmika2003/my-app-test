import React from 'react'

class QuestionTwo extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     name: this.props.name || 'Anonymous',
  //   }
  // }

  state = {
    name: 'Anonymous',
  }

  static getDerivedStateFromProps(props, state) {
    if (props.name) {
      return {
        name: props.name,
      }
    }
    return null
  }

  render() {
    return (
      <div>
        <h2>Question 2</h2>
        <p>
          Q: What is wrong with this component, and how would you go fixing or
          improving it?
        </p>
        <p>A: Fix code in QuestionTwo.js</p>
        <p>Hello {this.state.name}</p>
      </div>
    )
  }
}

export default QuestionTwo
