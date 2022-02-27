import React, { useState } from 'react';
// import Modal from '../Modal'


const ProjectList = ({ category }) => {

  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: "Walk 'n Spot",
      category: 'featured',
      imgName: '1-thumbHoriseon',
      description:
        '1',
      id: 1
    },
    {
      name: 'weatherDash',
      category: 'featured',
      imgName: '2-thumbRunBuddy',
      description:
        '2',
      id: 2
    },
    {
      name: 'deCrypto',
      category: 'featured',
      imgName: '3-thumbDecrypto',
      description:
        '3',
      id: 3
    },

    {
      name: 'README Generator',
      category: 'featured',
      imgName: '4-thumbPets',
      description:
        "3",
      id: 4
    },
    // {
    //   name: 'Regex for Date',
    //   category: 'featured',
    //   imgName: '4-thumbPets',
    //   description:
    //     '5',
    //   id: 5
    // },
    // {
    //   name: 'Social API',
    //   category: 'featured',
    //   imgName: '4-thumbPets',
    //   description:
    //     '6',
    //   id: 6
    // }

  ]);

  // const currentProjects = projects.filter((project) => project.category === category);

  // ------------- Modal State ------------------
  // const toggleModal = (image, i) => {
  //   //current photo (spread op to add index:i k/v pair to current photo state)
  //   setCurrentProject({ ...image, index: i })
  //   // when toggleModal function executes, isModalOpen toggles from true to false
  //   setIsModalOpen(!isModalOpen)
  // }


  return (
    <div>
      <div className="flex-row">

        {projects.map((project) => (
          <img
            className="project-image"
            src={require(`../../assets/thumbnails/${project.category}/${project.imgName}.jpg`)}
            alt={project.name}
            key={project.name}
          />
        ))}
      </div>
    </div>
  )
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