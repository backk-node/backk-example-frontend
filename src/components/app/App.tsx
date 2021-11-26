import React from 'react';
import './App.css';
import Tags from '../tags/view/Tags';
import CreateSalesItem from '../salesitems/view/CreateSalesItem';
import UpdateSalesItem from '../salesitems/view/UpdateSalesItem';
import store from '../../store/store';

const { salesItemState } = store.getState();

function App() {
  store.useState([salesItemState]);

  return (
    <div className="App">
      <Tags />
      <CreateSalesItem />
      <UpdateSalesItem currentSalesItem={salesItemState.createdSalesItem} />
    </div>
  );
}

export default App;
