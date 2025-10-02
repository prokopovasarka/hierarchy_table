
export interface singleRecord {
  data: Record<string, any>;
  children?: Record<string, { records: singleRecord[] }>;
};

export interface TableProps {
  tableData: singleRecord[];
  level?: number;
};

export interface DetailProps{
    record: singleRecord;
    keys: string[];
}