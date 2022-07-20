import React from 'react';

import '../styles/Card.css';

function Card(props) {
  return (
    <div className="content">
      <img className="img-content" src={props.img} alt={props.name} />
      <div className="text-content">
        <h2 className="name">{props.name}</h2>
        <p>
          <strong>Capital: </strong>
          {props.capital}
        </p>
        <p>
          <strong>Area: </strong>
          {props.area} km²
        </p>
        <p>
          <strong>Region: </strong>
          {props.region}
        </p>

        <p>
          <strong>Subregion: </strong>
          {props.subregion}
        </p>
        <p>
          <strong>Population: </strong>
          {props.population}
        </p>
        <p>
          <strong>languages: </strong>
          {props.languages}
        </p>
        <p>
          <strong>Currency: </strong>
          {props.currency}
        </p>
        <p>
          <a
            href={'https://en.wikipedia.org/wiki/' + props.name}
            target="_blank"
          >
            More...
          </a>
        </p>
      </div>
    </div>
  );
}
export default Card;
