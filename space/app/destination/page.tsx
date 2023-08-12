import React from 'react';
import data from '../../design/data.json';
import styles from './page.module.css';

const Destination = () => {
  const showDestinations = () => {
    // return <div>{data.destinations[0].name}</div>;
    return data.destinations.map((planet) => {
      return (
        <div className={styles.card}>
          <span>{planet.name}</span>
          <hr />
          {planet.description}
          <br />
          <br />
          Distance: {planet.distance}
        </div>
      );
    });
  };
  return (
    <main className={styles.main}>
      <div className={styles.cardContainer}>{showDestinations()}</div>
    </main>
  );
};

export default Destination;
