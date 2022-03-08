import React, { useState } from 'react';
import iconGh from '../../assets/marks/markGitHub-64.png';


const ProjectList = () => {


  const [projects] = useState([
    {
      name: "Walk 'n Spot",
      category: 'featured',
      imgName: '1-thumbWalkNSpot',
      href: 'https://walk-n-spot.herokuapp.com',
      gitHub: 'https://github.com/MellieDee/Walk-n-Spot',
      description: "An interactive app for hikers to find animals by searching trails in your city for animals you want to see and for those you don't!",
      id: 1
    },
    {
      name: 'weatherDash',
      category: 'featured',
      imgName: '2-thumbWeatherDash',
      href: 'https://melliedee.github.io/weatherDash/',
      gitHub: 'https://github.com/MellieDee/weatherDash',
      description: 'App to find weather in a searched city featuring dynamically updated HTML & CSS & API calls.',
      id: 2
    },
    {
      name: 'deCrypto',
      category: 'featured',
      imgName: '3-thumbDecrypto',
      href: 'https://lssdavies.github.io/deCrypto/',
      gitHub: 'https://github.com/MellieDee/deCrypto',
      description: 'A responsive website for people new to cryptocurrecy. A source to learn basic details and calculate buying power for a given dollar amount.',
      id: 3
    },

    {
      name: 'README Generator',
      category: 'featured',
      imgName: '4-thumbReadMe',
      href: 'https://github.com/MellieDee/readMe-generator',
      gitHub: 'https://github.com/MellieDee/readMe-generator',
      description: "This CLI app generates a quality README.md which includes a screenshot of the user's app. Not Deployed - checkout the repo!",
      id: 4
    },
    {
      name: 'Regex for Date',
      category: 'featured',
      imgName: '5-thumbRegex',
      href: 'https://gist.github.com/MellieDee/28442f71ed65e6caf6fee6280ccff8f2',
      gitHub: 'https://gist.github.com/MellieDee/28442f71ed65e6caf6fee6280ccff8f2',
      description: 'Intro to a few common Regex concepts by examining the syntax to match ISO 8601 YYYY/MM/DD dates. Not Deployed - checkout the repo!',
      id: 5
    },
    {
      name: 'Social API',
      category: 'featured',
      imgName: '6-thumbSocial',
      href: 'https://www.youtube.com/watch?v=jcwn0kXOXvI',
      gitHub: 'https://github.com/MellieDee/social-api',
      description: 'Backend for a simple social app using MongoDB, Mongoose, Express, and Day.js. Not Deployed - checkout the walk-through.',
      id: 6
    }
  ]);

  // --- hard code category until more projects to showcase ----
  //const currentProjects = projects.filter((project) => project.category === 'featured');

  return (

    <div className="container flex-row">
      {projects.map((project, i) => (
        <div key={project.id} className=" card-container">

          <article className="card-body">
            {/* ---- card pic ----- */}
            <a href="https://walk-n-spot.herokuapp.com" rel="noopener noreferrer" target="_blank">
              <img
                className="project-item project-img"
                src={require(`../../assets/thumbnails/featured/${project.imgName}.jpg`)}
                alt={project.name}
              />
            </a>

            {/* -------- card text ------ */}
            <div className="card-text flex-row">

              <a href={project.gitHub} rel="noopener noreferrer" target="_blank" className="project-git">
                <img src={iconGh} alt="GitHub icon" />
              </a>

              <div className="project-item mx-2 my-2">
                <h3><a href={project.href} rel="noopener noreferrer" target="_blank" alt={project.name} className="project-title">{project.name}</a></h3>

                <p className="project-desc">{project.description}</p>
              </div>

            </div>

          </article>
          {/* ---card body ends -- */}
        </div>
      ))
      }
    </div >
  )
}

export default ProjectList;