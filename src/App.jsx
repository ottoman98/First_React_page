import { useState, useEffect } from 'react';
import './App.css';

import { List } from './componets/countriesList';

function App() {
  return (
    <>
      <h1>Countries</h1>
      <List />
    </>
  );
}

export default App;
