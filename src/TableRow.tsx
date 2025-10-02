import { useState } from 'react';
import './Table.css';
import Detail from './Detail';
import { TableRowProps } from './types';

function TableRow({ item, keys, level, nestedTable }: TableRowProps) {
  const [open, setOpen] = useState(false);

  const hasChildren = item.children && Object.values(item.children).some(
    (child: any) => Array.isArray(child.records) && child.records.length > 0
  );

  return (
    <>
      <tr>
        { hasChildren ? (
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

      { open &&
        item.children &&
        Object.entries(item.children).map(([childKey, childVal], idx) => (
          <tr key={idx}>
            <td colSpan={keys.length + 1}>
              {nestedTable(childVal.records, level + 1)}
            </td>
          </tr>
        ))}
    </>
  );
}

export default TableRow;