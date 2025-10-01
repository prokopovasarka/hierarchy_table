import React, { useState } from 'react';
import './Table.css';
import Detail from './Detail';
import { singleRecord } from '../types';

interface TableProps {
  tableData: singleRecord[];
  level?: number;
}

function TableRow({ item, keys, level }: { item: singleRecord; keys: string[]; level: number }) {
  const [open, setOpen] = useState(false);

  const hasChildren = item.children && Object.values(item.children).some(
    (child: any) => Array.isArray(child.records) && child.records.length > 0
  );

  return (
    <>
      <tr>
        {
            hasChildren ? (
                <td
                    onClick={() => setOpen(!open)}
                      style={{ cursor: item.children ? 'pointer' : 'default', textAlign: 'center' }}
                    >
                    {item.children ? (open ? '▾' : '▸') : null}
                </td>
            ) : <td />
        }
        <Detail record={item} keys={keys} />
      </tr>

      {open &&
        item.children &&
        Object.entries(item.children).map(([childKey, childVal], idx) => (
          <tr key={idx}>
            <td colSpan={keys.length + 1}>
              <Table tableData={childVal.records} level={level + 1} />
            </td>
          </tr>
        ))}
    </>
  );
}

function Table({ tableData, level = 0 }: TableProps) {
  if (!tableData || tableData.length === 0) return null;

  const keys = Object.keys(tableData[0].data);

  return (
    <table className='mainTable' style={{ marginLeft: `${level * 20}px` }}>
      <thead className='firstRow'>
        <tr>
            <th />
            {keys.map((key) => (
            <th key={key}>{key}</th>
            ))}
            <th />
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, rowIndex) => (
          <TableRow key={rowIndex} item={item} keys={keys} level={level} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;