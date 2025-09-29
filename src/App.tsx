import React, {useEffect, useState} from 'react';
import './App.css';
import Table from './Table'

import data from './data/example-data.json';
import { singleRecord } from '../types';

function App() {
  const[inputData, setData] = useState<singleRecord[]>([]);

  useEffect(() => {
    setData(data as singleRecord[]);
  }, []);

  return (
    <div className="App">
      <Table tableData={inputData}/>
    </div>
  );
}

export default App;
