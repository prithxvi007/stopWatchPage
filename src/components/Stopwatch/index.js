// src/components/Stopwatch/index.js
import React, {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  render() {
    return (
      <div className="stopwatch-bg-container">
        {/* Heading with "Stopwatch" */}
        <h1 className="stopwatch-heading">Stopwatch</h1>

        <div className="stopwatch-card-container">
          {/* Image with src and alt attributes */}
          <div className="stopwatch-header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="timer-img"
              alt="stopwatch"
            />
            <p className="timer-text">Timer</p>
          </div>

          {/* Timer display showing formatted time in a heading */}
          <h2 className="stopwatch-timer">00:00</h2>

          {/* Buttons: Start, Stop, and Reset */}
          <div className="stopwatch-btn-container">
            <button type="button" className="stopwatch-btn green">
              Start
            </button>
            <button type="button" className="stopwatch-btn red">
              Stop
            </button>
            <button type="button" className="stopwatch-btn yellow">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
