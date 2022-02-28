import React, { useState } from 'react';
import iconGh from '../../assets/marks/markGitHub-64.png';
// import Modal from '../Modal'


const ProjectList = () => {

  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const [currentProject, setCurrentProject] = useState();
  // const currentCategory = 'featured'

  const [projects] = useState([
    {
      name: "Walk 'n Spot",
      category: 'featured',
      imgName: '1-thumbWalkNSpot',
      href: 'https://walk-n-spot.herokuapp.com',
      gitHub: 'https://github.com/MellieDee/Walk-n-Spot',
      description: "To develop an interactive app for hikers to find animals. A way to search trails in your city for animals you want to see, and for those you don't!",
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
      description: 'To develop a responsive website for people new to cryptocurrecy. A source to learn basic details and calculate buying power for a given dollar amount.',
      id: 3
    },

    {
      name: 'README Generator',
      category: 'featured',
      imgName: '4-thumbReadMe',
      href: 'https://github.com/MellieDee/readMe-generator',
      gitHub: 'https://github.com/MellieDee/readMe-generator',
      description: "CLI app to generate a quality README.md which includes a screenshot of the user's app. Not Deployed - checkout the repo!",
      id: 4
    },
    {
      name: 'Regex for Date',
      category: 'featured',
      imgName: '5-thumbRegex',
      href: 'https://gist.github.com/MellieDee/28442f71ed65e6caf6fee6280ccff8f2',
      gitHub: 'https://gist.github.com/MellieDee/28442f71ed65e6caf6fee6280ccff8f2',
      description: 'Intro to a few common Regex concepts by examining the syntax to search for ISO 8601 YYYY/MM/DD dates. Not Deployed - checkout the repo!',
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

          <div className="card-body">
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

          </div>
          {/* ---card body ends -- */}
        </div>
      ))
      }
    </div >



    // <div className="card-container">
    //   {
    //     projects.map((project, i) => (
    //       <>
    //         <div key={project.id} className="card-body">

    //           {/* <a href={project.href} rel="noopener noreferrer" target="_blank"> */}

    //           <div className="card-header">
    //             <a href={project.href} rel="noopener noreferrer" target="_blank">
    //               <h3 className="project-title">{project.name} </h3>
    //             </a>
    //           </div>

    //           {/* <div className="card-image">
    //           <a href={project.href} rel="noopener noreferrer" target="_blank">
    //             <img
    //               className="img-thumbnail"
    //               src={require(`../../assets/thumbnails/featured/${project.imgName}.jpg`)}
    //               alt={project.name}
    //             />
    //           </a> */}

    //           <div className="card-image"
    //             style={{ backgroundImage: `{require(../../ assets/thumbnails/featured/${project.imgName}.jpg`, backgroundSize: `cover`, backgroundPosition: `center center`, backgroundRepeat: `no-repeat` }}>
    //           </div>

    //           <p>{project.description}</p>
    //         </div>

    //       </>
    //     ))
    //   }
    // </div >
  )
}

export default ProjectList;

  // ------------------------ Modal State for Furture --------------------------------
  // const toggleModal = (image, i) => {
  //   //current photo (spread op to add index:i k/v pair to current photo state)
  //   setCurrentProject({ ...image, index: i })
  //   // when toggleModal function executes, isModalOpen toggles from true to false
  //   setIsModalOpen(!isModalOpen)
  // }
// -------------  JSX to display images--------------
//   return (
//     <div>
//       {isModalOpen && (<Modal currentPhoto={currentProject} onClose={toggleModal} />)}
//       <div className="flex-row">
//         {currentProjects.map((image, i) => (
//           <img
//             src={require(`../../assets/small/${category}/${i}.jpg`)}
//             alt={image.name}
//             className="img-thumbnail mx-1"
//             onClick={() => toggleModal(image, i)}
//             key={image.name}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };