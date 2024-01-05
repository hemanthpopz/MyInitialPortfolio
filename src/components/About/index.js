import {Component} from 'react'
import MyPDF from '../Images/MyResume.pdf'
import Header from '../Header'

import './index.css'

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <Header />
        <div className="about-content-container">
          <div className="about-text-container">
            <h1 className="about-heading">About Me</h1>
            <p className="about-des">
              I am a web developer with a vast array of knowledge in many
              different front end and back end languages, responsive frameworks,
              databases, and best code practices. My objective is simply to be
              the best web developer that I can be and to contribute to the
              technology industry all that I know and can do
            </p>
            <a href={MyPDF} target="_blank" rel="noreferrer">
              <button className="resume-btn">Resume</button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default About
