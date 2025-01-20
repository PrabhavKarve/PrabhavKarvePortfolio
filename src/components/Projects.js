// Projects.js
import React from 'react';
import '../styles/project.css';

const Projects = () => {
  

  return (
    <section className="projects" id='projects'>
      <h2>Projects</h2>
      <h1 class = "projectHeader">Some of my creations</h1>
        <div class="card-container">
          <div class = "card">
          <img class="card-image"  alt="Picture" />
            <div class = "card-content">
              <h3>Logistics & warehouse payment-invoice management system</h3>
              <p>A logistics-based warehouse management system at PSIT Solutions.
                Enabled with CRUD operations, the system maintains queue-based payment invoice management in minutes .</p>
              <a class="btn" href="#" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
          </div>

          <div class = "card">
          <img class="card-image"  alt="Picture" />
            <div class = "card-content">
              <h3>VocApp<br></br>Vocabulary Flashcards</h3>
              <p>Built a SaaS application where users can improve their English vocabulary, featuring 3,400 GRE words across 34 chapters.<br></br> Learn new words
                using interactive flashcards.
              </p>
              <a class="btn" href="https://voc-app-steel.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
          </div>
          </div>
          <div class="card-container">
        
          <div class = "card">
          <img class="card-image"  alt="Picture" />
            <div class = "card-content">
              <h3>Image-to-Token<br></br>Translator</h3>
              <p>Created a web application where users can enroll generate AI generated Images based on the prompts using DALL-E 3 API by OpenAI,
              capable of producing 500 Images per day.<br></br>View cool AI generated Images by providing a prompt.</p>
              <a class="btn" href="https://aig-frontend-one.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
          </div>
        {/*https://link.springer.com/chapter/10.1007/978-981-16-8862-1_55 */}
          <div class = "card">
          <img class="card-image" alt="Picture" />
            <div class = "card-content">
              <h3>Paint clone desktop application in python</h3>
              <p>A paint clone with the following functionalities: Color palette, variable pencil size, shape drawing choices
with the provision of saving the work.</p>
              <a class="btn" href="https://github.com/PrabhavKarve/Paint-by-python" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
          </div>
        </div>
    </section>
  );
}

export default Projects;
