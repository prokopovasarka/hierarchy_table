import React from 'react';
import './Detail.css';

import { singleRecord } from '../types';

interface DetailProps{
    record: singleRecord;
    keys: string[];
}

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