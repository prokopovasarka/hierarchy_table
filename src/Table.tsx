import React from 'react';
import './Table.css';
import Detail from './Detail'

import { singleRecord } from '../types';

interface tableProps{
    tableData: singleRecord[];
    level?: number;
}

function Table({ tableData, level = 0 }: tableProps) {

    if (!tableData || tableData.length === 0) {
        return <div>Loading...</div>;
    }

    const keys = Object.keys(tableData[0].data);

    return (
      <table className="mainTable" style={{ marginLeft: `${level * 20}px`}}>
        <thead>
          <tr>
            {keys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {tableData.map((item, rowIndex) => (
                <React.Fragment key={rowIndex}>
                    <tr key={rowIndex}>
                        <Detail record={item} keys={keys} />
                    </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
    );
}

export default Table;