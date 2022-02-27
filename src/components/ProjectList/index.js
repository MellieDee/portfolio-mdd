import React, { useState } from 'react';
// import Modal from '../Modal'


const ProjectList = () => {

  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const [currentProject, setCurrentProject] = useState();
  // const currentCategory = 'featured'

  const [projects] = useState([
    {
      name: "Walk 'n Spot",
      category: 'featured',
      imgName: '1-thumbHoriseon',
      href: 'https://walk-n-spot.herokuapp.com',
      description: '1',
      id: 1
    },
    {
      name: 'weatherDash',
      category: 'featured',
      imgName: '2-thumbRunBuddy',
      description: '2',
      id: 2
    },
    {
      name: 'deCrypto',
      category: 'featured',
      imgName: '3-thumbDecrypto',
      href: 'https://lssdavies.github.io/deCrypto/',
      description: '3',
      id: 3
    },

    {
      name: 'README Generator',
      category: 'featured',
      imgName: '4-thumbPets',
      href: 'https://lssdavies.github.io/deCrypto/',
      description: "3",
      id: 4
    },
    // {
    //   name: 'Regex for Date',
    //   category: 'featured',
    //   imgName: '4-thumbPets',
    //   href: 'https://lssdavies.github.io/deCrypto/',
    //   description:
    //     '5',
    //   id: 5
    // },
    // {
    //   name: 'Social API',
    //   category: 'featured',
    //   imgName: '4-thumbPets',
    //   href: 'https://lssdavies.github.io/deCrypto/',
    //   description:
    //     '6',
    //   id: 6
    // }

  ]);

  // --- hard code category until more projects to showcase ----
  //const currentProjects = projects.filter((project) => project.category === 'featured');

  return (
    // <div className="flex-row">
    <div>
      {projects.map((project, i) => (
        <div key={project.id} className="w3-card w3-hover-shadow my-5">
          <a href={project.href} rel="noopener noreferrer" target="_blank">
            <img
              className="project-image img-thumbnail"
              src={require(`../../assets/thumbnails/featured/${project.imgName}.jpg`)}
              alt={project.name}
            />
          </a>
        </div>
      ))}
    </div >
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