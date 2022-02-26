import React, { useState } from 'react';
// import Modal from '../Modal'

const ProjectList = ({ category }) => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: "Walk 'n Spot",
      category: 'featured',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'deCrypto',
      category: 'featured',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'weatherDash',
      category: 'featured',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'README Generator',
      category: 'featured',
      description:
        "CLI app to generate a quality README.md which includes a screenshot of the user's app."
    },
    {
      name: 'Regex for Date',
      category: 'featured',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Social API',
      category: 'featured',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }

  ]);

  const currentProjects = projects.filter((project) => project.category === category);

  // ------------- Modal State ------------------
  // const toggleModal = (image, i) => {
  //   //current photo (spread op to add index:i k/v pair to current photo state)
  //   setCurrentProject({ ...image, index: i })
  //   // when toggleModal function executes, isModalOpen toggles from true to false
  //   setIsModalOpen(!isModalOpen)
  // }
}

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

export default ProjectList;