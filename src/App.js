import React, { useEffect, useState } from 'react';
import Listing from './Listing';
import data from './data.json';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div>
      <h1>Список предложений</h1>
      <Listing items={items} />
    </div>
  );
};

export default App;