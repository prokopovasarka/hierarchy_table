import './Table.css';
import { TableProps } from './types';
import TableRow from './TableRow';

function Table({ tableData, level = 0 }: TableProps) {
  if (!tableData || tableData.length === 0) return null;

  const keys = Object.keys(tableData[0].data);

  return (
    <table className='mainTable' style={{ marginLeft: `${level * 20}px` }}>
      <thead className='firstRow'>
        <tr>
            <th />
            { keys.map((key) => (
            <th key={key}>{key}</th>
            ))}
            <th />
        </tr>
      </thead>
      <tbody>
        { tableData.map((item, rowIndex) => (
          <TableRow key={rowIndex} item={item} keys={keys} level={level} nestedTable={(records, newLevel) => (
              <Table tableData={records} level={newLevel} />
          )}/>
        ))}
      </tbody>
    </table>
  );
}

export default Table;