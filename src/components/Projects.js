// Projects.js
import React from 'react';
import '../styles/project.css';
import VocApp from "../Images/VocApp-Flashcards.PNG"
import AIG from "../Images/AIG.PNG"
import Paint from "../Images/Paint.PNG"
import F1bnb from "../Images/F1bnb.PNG"

const Projects = () => {
  return (
    <section className="projects" id='projects'>
      <h1 class = "projectHeader">Some of my creations</h1>
      <section className='project-section'>
                    <div className='project-div' id = 'aProject'>
                        <div className='row'>
                            <div className='col-md-6 col-12' >
                                <h3 className="text-lg font-medium pt-8 pb-2 text-start">
                                    VocApp: Vocabulary builder
                                </h3>
                                <div className='project-desc'>
                                    A vocabulary flash card deck with 3000+ common english words. Try a demo, learn and test your vocab.
                                    <br/>
                                    Learn. Test. Repeat
                                </div>
                                <div className='mt-3'>
                                    <span className="text-gray-800 py-1 project-tech">React JS    </span>
                                    <span className="text-gray-800 py-1 project-tech">MaterialUI    </span>
                                    <span className="text-gray-800 py-1 project-tech">Python    </span>
                                    <span className="text-gray-800 py-1 project-tech">Flask   </span>
                                    <span className="text-gray-800 py-1 project-tech">PostgreSQL   </span>
                                </div>
                                <div class="bordered-div">
                                    <a href="https://voc-app-steel.vercel.app/" target="_blank" title="View Project">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M326.6 185.4c14.6-14.6 33.8-22.6 54.4-22.6s39.8 8 54.4 22.6l22.6 22.6c14.6 14.6 22.6 33.8 22.6 54.4s-8 39.8-22.6 54.4l-56 56c-14.6 14.6-33.8 22.6-54.4 22.6s-39.8-8-54.4-22.6c-6.3-6.3-6.3-16.4 0-22.6s16.4-6.3 22.6 0c9.8 9.8 22.9 15.2 36.7 15.2s26.9-5.4 36.7-15.2l56-56c9.8-9.8 15.2-22.9 15.2-36.7s-5.4-26.9-15.2-36.7l-22.6-22.6c-9.8-9.8-22.9-15.2-36.7-15.2s-26.9 5.4-36.7 15.2c-6.3 6.3-16.4 6.3-22.6 0s-6.3-16.4 0-22.6zM185.4 326.6c-14.6 14.6-33.8 22.6-54.4 22.6s-39.8-8-54.4-22.6l-22.6-22.6C39.4 289.4 31.4 270.2 31.4 249.6s8-39.8 22.6-54.4l56-56c14.6-14.6 33.8-22.6 54.4-22.6s39.8 8 54.4 22.6c6.3 6.3 6.3 16.4 0 22.6s-16.4 6.3-22.6 0c-9.8-9.8-22.9-15.2-36.7-15.2s-26.9 5.4-36.7 15.2l-56 56c-9.8 9.8-15.2 22.9-15.2 36.7s5.4 26.9 15.2 36.7l22.6 22.6c9.8 9.8 22.9 15.2 36.7 15.2s26.9-5.4 36.7-15.2c6.3-6.3 16.4-6.3 22.6 0s6.3 16.4 0 22.6zM329.2 182.8c6.3 6.3 6.3 16.4 0 22.6l-128 128c-6.3 6.3-16.4 6.3-22.6 0s-6.3-16.4 0-22.6l128-128c6.2-6.3 16.4-6.3 22.6 0z"></path>
                                        </svg>
                                    </a>
                                </div>

                            </div>
                            <div className='project-img col-md-6 col-12' style={{ left: "-4%" }}>
                                <img src={VocApp} alt='helpdesk' style={{
                                    position: "relative",
                                    top: "0%",
                                    zIndex: "10",
                                    width: "100%",
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className='project-div' id = 'aProject'>
                        <div className='row'>
                            <div className='project-img col-md-6 col-12' style={{ right: "-4%" }}>
                                <img src={F1bnb} alt='helpdesk' style={{
                                    position: "relative",
                                    top: "0%",
                                    zIndex: "10",
                                    width: "100%",
                                }} />
                            </div>
                            <div className='col-md-6 col-12'>
                                <h3 className="text-lg font-medium pt-8 pb-2 text-end">
                                    F1bnb:<br/>Accommodation  rental platform
                                </h3>
                                <div className='project-desc'>
                                    Struggling to find a cheap accomodation as an F1 student ? try F1bnb to find cheap housing in the city you are travelling.
                                </div>
                                <div className='mt-3 text-end'>
                                    <span className="text-gray-800 py-1 project-tech">React JS</span>
                                    <span className="text-gray-800 py-1 project-tech">MaterialUI</span>
                                    <span className="text-gray-800 py-1 project-tech">Python</span>
                                    <span className="text-gray-800 py-1 project-tech">FastAPI</span>
                                    <span className="text-gray-800 py-1 project-tech">MongoDB</span>
                                </div>
                                <div class="bordered-div">
                                    <a href="https://f1bnb-frontend.vercel.app/#logout" target="_blank" title="View Project">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M326.6 185.4c14.6-14.6 33.8-22.6 54.4-22.6s39.8 8 54.4 22.6l22.6 22.6c14.6 14.6 22.6 33.8 22.6 54.4s-8 39.8-22.6 54.4l-56 56c-14.6 14.6-33.8 22.6-54.4 22.6s-39.8-8-54.4-22.6c-6.3-6.3-6.3-16.4 0-22.6s16.4-6.3 22.6 0c9.8 9.8 22.9 15.2 36.7 15.2s26.9-5.4 36.7-15.2l56-56c9.8-9.8 15.2-22.9 15.2-36.7s-5.4-26.9-15.2-36.7l-22.6-22.6c-9.8-9.8-22.9-15.2-36.7-15.2s-26.9 5.4-36.7 15.2c-6.3 6.3-16.4 6.3-22.6 0s-6.3-16.4 0-22.6zM185.4 326.6c-14.6 14.6-33.8 22.6-54.4 22.6s-39.8-8-54.4-22.6l-22.6-22.6C39.4 289.4 31.4 270.2 31.4 249.6s8-39.8 22.6-54.4l56-56c14.6-14.6 33.8-22.6 54.4-22.6s39.8 8 54.4 22.6c6.3 6.3 6.3 16.4 0 22.6s-16.4 6.3-22.6 0c-9.8-9.8-22.9-15.2-36.7-15.2s-26.9 5.4-36.7 15.2l-56 56c-9.8 9.8-15.2 22.9-15.2 36.7s5.4 26.9 15.2 36.7l22.6 22.6c9.8 9.8 22.9 15.2 36.7 15.2s26.9-5.4 36.7-15.2c6.3-6.3 16.4-6.3 22.6 0s6.3 16.4 0 22.6zM329.2 182.8c6.3 6.3 6.3 16.4 0 22.6l-128 128c-6.3 6.3-16.4 6.3-22.6 0s-6.3-16.4 0-22.6l128-128c6.2-6.3 16.4-6.3 22.6 0z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project-div' id = 'aProject'>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <h3 className="text-lg font-medium pt-8 pb-2  text-start">
                                    DALLE-3 wrapper:<br/>
                                    AI Image generator
                                </h3>
                                <div className='project-desc'>
                                    Try out this wrapper application for DALLE-3 AI image generation API. Type your promt for cool  AI generated images.
                                </div>
                                <div className='mt-3'>
                                    <span className="text-gray-800 py-1 project-tech">React JS</span>
                                    <span className="text-gray-800 py-1 project-tech">Node JS</span>
                                    <span className="text-gray-800 py-1 project-tech">MongoDB</span>
                                    <span className="text-gray-800 py-1 project-tech">Express JS</span>
                                </div>
                                <div class="bordered-div">
                                    <a href="https://aig-frontend-one.vercel.app/home" target="_blank" title="View Project">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M326.6 185.4c14.6-14.6 33.8-22.6 54.4-22.6s39.8 8 54.4 22.6l22.6 22.6c14.6 14.6 22.6 33.8 22.6 54.4s-8 39.8-22.6 54.4l-56 56c-14.6 14.6-33.8 22.6-54.4 22.6s-39.8-8-54.4-22.6c-6.3-6.3-6.3-16.4 0-22.6s16.4-6.3 22.6 0c9.8 9.8 22.9 15.2 36.7 15.2s26.9-5.4 36.7-15.2l56-56c9.8-9.8 15.2-22.9 15.2-36.7s-5.4-26.9-15.2-36.7l-22.6-22.6c-9.8-9.8-22.9-15.2-36.7-15.2s-26.9 5.4-36.7 15.2c-6.3 6.3-16.4 6.3-22.6 0s-6.3-16.4 0-22.6zM185.4 326.6c-14.6 14.6-33.8 22.6-54.4 22.6s-39.8-8-54.4-22.6l-22.6-22.6C39.4 289.4 31.4 270.2 31.4 249.6s8-39.8 22.6-54.4l56-56c14.6-14.6 33.8-22.6 54.4-22.6s39.8 8 54.4 22.6c6.3 6.3 6.3 16.4 0 22.6s-16.4 6.3-22.6 0c-9.8-9.8-22.9-15.2-36.7-15.2s-26.9 5.4-36.7 15.2l-56 56c-9.8 9.8-15.2 22.9-15.2 36.7s5.4 26.9 15.2 36.7l22.6 22.6c9.8 9.8 22.9 15.2 36.7 15.2s26.9-5.4 36.7-15.2c6.3-6.3 16.4-6.3 22.6 0s6.3 16.4 0 22.6zM329.2 182.8c6.3 6.3 6.3 16.4 0 22.6l-128 128c-6.3 6.3-16.4 6.3-22.6 0s-6.3-16.4 0-22.6l128-128c6.2-6.3 16.4-6.3 22.6 0z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className='project-img col-md-6 col-12' style={{ left: "-4%" }}>
                                <img src={AIG} style={{
                                    position: "relative",
                                    top: "10%",
                                    zIndex: "10",
                                    width: "100%",
                                }} alt="newsShorts" />
                            </div>
                        </div>
                    </div>
                    <div className='project-div' id = 'aProject'>
                        <div className='row'>
                            <div className='project-img col-md-6 col-12' style={{ right: "-4%" }}>
                                <img src={Paint} alt='helpdesk' style={{
                                    position: "relative",
                                    top: "5%",
                                    zIndex: "10",
                                    width: "100%",
                                }} />
                            </div>
                            <div className='col-md-6 col-12'>
                                <h3 className="text-lg font-medium pt-8 pb-2 text-end">
                                    Paint Clone:<br/>Desktop app
                                </h3>
                                <div className='project-desc'>
                                    Missing the classic old paint application ? Try a custom made paint clone inspired by classic old MS paint to draw and save stuff. Run the code and learn how a paint clone desktop app could be made.
                                </div>
                                <div className='mt-3 text-end'>
                                    <span className="text-gray-800 py-1 project-tech">HTML</span>
                                    <span className="text-gray-800 py-1 project-tech">CSS</span>
                                    <span className="text-gray-800 py-1 project-tech">Javascript</span>
                                    <span className="text-gray-800 py-1 project-tech">PHP</span>
                                    <span className="text-gray-800 py-1 project-tech">MySql</span>
                                </div>
                                <div class="bordered-div">
                                    <a href="https://github.com/PrabhavKarve/Paint-by-python" target="_blank" title="View Project">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M326.6 185.4c14.6-14.6 33.8-22.6 54.4-22.6s39.8 8 54.4 22.6l22.6 22.6c14.6 14.6 22.6 33.8 22.6 54.4s-8 39.8-22.6 54.4l-56 56c-14.6 14.6-33.8 22.6-54.4 22.6s-39.8-8-54.4-22.6c-6.3-6.3-6.3-16.4 0-22.6s16.4-6.3 22.6 0c9.8 9.8 22.9 15.2 36.7 15.2s26.9-5.4 36.7-15.2l56-56c9.8-9.8 15.2-22.9 15.2-36.7s-5.4-26.9-15.2-36.7l-22.6-22.6c-9.8-9.8-22.9-15.2-36.7-15.2s-26.9 5.4-36.7 15.2c-6.3 6.3-16.4 6.3-22.6 0s-6.3-16.4 0-22.6zM185.4 326.6c-14.6 14.6-33.8 22.6-54.4 22.6s-39.8-8-54.4-22.6l-22.6-22.6C39.4 289.4 31.4 270.2 31.4 249.6s8-39.8 22.6-54.4l56-56c14.6-14.6 33.8-22.6 54.4-22.6s39.8 8 54.4 22.6c6.3 6.3 6.3 16.4 0 22.6s-16.4 6.3-22.6 0c-9.8-9.8-22.9-15.2-36.7-15.2s-26.9 5.4-36.7 15.2l-56 56c-9.8 9.8-15.2 22.9-15.2 36.7s5.4 26.9 15.2 36.7l22.6 22.6c9.8 9.8 22.9 15.2 36.7 15.2s26.9-5.4 36.7-15.2c6.3-6.3 16.4-6.3 22.6 0s6.3 16.4 0 22.6zM329.2 182.8c6.3 6.3 6.3 16.4 0 22.6l-128 128c-6.3 6.3-16.4 6.3-22.6 0s-6.3-16.4 0-22.6l128-128c6.2-6.3 16.4-6.3 22.6 0z"></path>
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
    </section>
  );
}

export default Projects;
