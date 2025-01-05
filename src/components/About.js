import React from "react";
import '../styles/About.css'
import RITlogo from '../Images/RIT.svg';
import I2ITlogo from '../Images/I2IT.png';
import HSClogo from '../Images/HSC.png';
import AccentureLogo from '../Images/AccentureLogo.png';

const About = () => {

    const Languages = [
        "C++", "Python", "Java", "SQL", "Javascript", "HTML5", "CSS"
      ];

    const Frameworks = [
        "Numpy", "Pandas", "Scikitlearn", "Tensorflow", "Keras", "OpenCV", "React.js", "Springboot"
    ]

    const tools = [
        "Android Studios", "Postman", "Amazon EC2", "Jenkin", "Bitbucket", "GCFR", "Teradata"
    ]

    return (
    <section className="about" id="about">
        <h2>About Me</h2>
        <p>I'm just a regular software Engineering trying to be even better at thinking, speaking and a better human.<br></br>
            As a 1999 born kid you can say that I'am among the last batch of humans sent on earth by god in 20th century.<br></br> So Thank god for that.
        </p>

        <div className="education">
                <h3>Timeline</h3>
                <div className="timeline-item">
                    <div className="school">
                        <img src={RITlogo} alt="Custom Icon" className="icon" />
                    </div>

                    <div className="content">
                        <h4>MS, Computer Science (3.8/4)</h4>
                        <p>Rochester Institute of Technology</p>
                        <p>Henrietta, NY, US</p>
                    </div>
                </div>

                <span className="date">Aug 2023 - Aug 2025</span><div className="timeBar"></div>

                <div className="timeline-item">
                    <div className="school">
                        <img src={AccentureLogo} alt="Custom Icon" className="icon" />
                    </div>

                    <div className="content">
                        <h4>Associate Software Engineer</h4>
                        <p>Accenture</p>
                        <p>Hinjewadi-Pune, Maharashtra, India</p>
                    </div>
                </div>

                <span className="date">Sept 2021 - March 2023</span><div className="timeBar"></div>

                <div className="timeline-item">
                    <div className="school">
                        <img src={I2ITlogo} alt="Custom Icon" className="icon" /> 
                    </div>

                    <div className="content">
                        <h4>BE, Information Tech (3.5/4)</h4>
                        <p>International Institute of Information Technology</p>
                        <p>Hinjewadi-Pune, Maharashtra, India</p>
                    </div>
                </div>

                <span className="date">Aug 2017 - July 2021</span><div className="timeBar"></div>

                <div className="timeline-item">
                    <div className="school">
                        <img src={HSClogo} alt="Custom Icon" className="icon" />
                    </div>
                    <div className="content">
                        <h4>HSC- 12th grade</h4>
                        <p>MS Gosavi college of science and commerce</p>
                        <p>Nashik, India</p>
                    </div>
                </div>
                <span className="date">May 2017</span><div className="timeBar"></div><span className="date">Born 24 July 1999</span>
        </div>

        <div className="skills">
                <h3>Skills</h3>
                
                <ul>
                <p>Languages</p>
                    <li> 
                    {Languages.map((Language, index) => (
                        <div key={index} class = "Askill">
                            {Language}
                        </div>
                    ))}</li>

                <p>Frameworks</p>
                    <li> 
                    {Frameworks.map((tool, index) => (
                        <div key={index} class = "Askill">
                            {tool}
                        </div>
                    ))}</li>

                <p>Tools</p>
                    <li> 
                    {tools.map((tool, index) => (
                        <div key={index} class = "Askill">
                            {tool}
                        </div>
                    ))}</li>
                </ul>
        </div>
        
    </section>
    )
}

export default About