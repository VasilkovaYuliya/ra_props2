import React, { useState, useEffect } from 'react';
import Listing from './Listing';
import data from './data.json';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data.map(item => JSON.parse(item)));
  }, []);

  return <Listing items={items} />;
}

export default App;
