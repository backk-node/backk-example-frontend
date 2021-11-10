import React from 'react';
import './App.css';
import Tags from '../tags/view/Tags';
import CreateSalesItem from '../salesitems/view/CreateSalesItem';

function App() {
  return (
    <div className="App">
      <Tags />
      <CreateSalesItem />
    </div>
  );
}

export default App;
