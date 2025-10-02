import { ReactNode } from 'react';

export interface singleRecord {
  data: Record<string, any>;
  children?: Record<string, { records: singleRecord[] }>;
};

export interface TableProps {
  tableData: singleRecord[];
  level?: number;
};

export interface TableRowProps {
  item: singleRecord;
  keys: string[];
  level: number;
  nestedTable: (records: singleRecord[], level: number) => ReactNode;
}

export interface DetailProps{
    record: singleRecord;
    keys: string[];
}