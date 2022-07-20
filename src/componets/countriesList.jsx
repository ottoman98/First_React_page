import React from 'react';
import Card from './Card';
import { numberWithCommas } from '../utils/thousands_separator';
import { useState, useEffect } from 'react';
import { currencies } from '../utils/currencies';

export function List() {
  const URL = 'https://restcountries.com/v3.1/region/europe';
  const [todos, setTodos] = useState();

  const fetchApi = async () => {
    const response = await fetch(URL);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };
  fetchApi();

  return (
    <div className="main-div">
      {!todos
        ? 'Loading......'
        : todos.map((x) => {
            return (
              <Card
                img={x.flags.png}
                name={x.name.common}
                capital={x.capital}
                area={numberWithCommas(x.area)}
                region={x.region}
                subregion={x.subregion}
                population={numberWithCommas(x.population)}
                languages={Object.values(x.languages).join(', ')}
                currency={currencies(x)}
              />
            );
          })}
    </div>
  );
}
