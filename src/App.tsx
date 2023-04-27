import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}
function App() {

  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Henry',
      age: 32,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rkaNdQI3nh63eMKEulhYowGOnaWaUPMFrg&usqp=CAU',
      note: 'Something'
    }
  ]);

  return (
    <div className="App">
      <List people={people} />
      <AddToList />
    </div>
  );
}

export default App;
