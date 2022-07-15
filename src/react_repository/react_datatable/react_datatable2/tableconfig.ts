export namespace TableConfig {
    export type Row = Record<string, string>
    export type Header = Record<string, string>
    export type Sorter = Record<string, boolean>
  
    export interface TableProps {
      headers: Header
      rows: Row[]
      sorters?: Sorter
    }
  }