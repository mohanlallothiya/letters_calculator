// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {letters: 0}

  calculateLetters = event => {
    const inputValue = event.target.value
    const inputFinal = inputValue.split(' ').join('')
    this.setState({letters: inputFinal.length})
  }

  render() {
    const {letters} = this.state
    return (
      <div className="mainContainer">
        <div className="subContainer">
          <div className="col1">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="labelEl" htmlFor="inputEl">
              Enter the phrase
            </label>
            <input
              onChange={this.calculateLetters}
              className="inputEl"
              id="inputEl"
              type="text"
              placeholder="Enter the phrase"
            />
            <p className="noOfLetters">No.of letters: {letters}</p>
          </div>
          <div className="col2">
            <img
              className="calculateImg"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
