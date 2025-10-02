import React from 'react';
import './Detail.css';

import { DetailProps } from './types';

function Detail({ record, keys }: DetailProps) {
    return(
        <>
            {keys.map((key) => (
                <td key={key}>{String(record.data[key])}</td>
            ))}
        </>
    );
}

export default Detail;