import React from 'react';
import ProjectList from '../ProjectList';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
  // const { name, description } = props;
  return (
    // <section className='container'>
    <section>
      {/* <h1 data-testid="h1tag">{name}</h1>
      <p>{description}</p> */}
      <ProjectList />
    </section>
  );
}

export default Portfolio;