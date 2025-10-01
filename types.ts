
export interface singleRecord {
  data: Record<string, any>;
  children?: Record<string, { records: singleRecord[] }>;
}