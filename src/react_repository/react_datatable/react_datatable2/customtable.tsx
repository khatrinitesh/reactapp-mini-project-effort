import React, {
    createContext,
    FunctionComponent,
    useContext,
    useEffect,
    useState,
  } from 'react'
  import './Table.css'
  import { TableConfig } from './tableconfig'
  import { useSorter } from './usesorter'
  
  const TableContext = createContext<Record<string, any>>({})
  
  const Header: FunctionComponent<{ headerKey: string }> = ({ headerKey }) => {
    const { headers, isSortable, sortersData, handleSortToggled } = useContext(
      TableContext,
    )
  
    return (
      <th>
        {headers[headerKey]}
        {isSortable && sortersData![headerKey] !== undefined && (
          <div
            className="sort-icon"
            onClick={() => handleSortToggled(headerKey, sortersData![headerKey])}
          >
            {sortersData![headerKey] ? <>&and;</> : <>&or;</>}
          </div>
        )}
      </th>
    )
  }
  
  const Row: FunctionComponent<{ row: TableConfig.Row }> = ({ row }) => {
    return (
      <tr>
        {Object.values(row).map((cell: string, cellIndex: number) => (
          <td key={'cell' + cellIndex}>{cell}</td>
        ))}
      </tr>
    )
  }
  
  const Table: FunctionComponent<TableConfig.TableProps> = ({
    headers,
    rows,
    sorters,
  }) => {
    const [displayedRows, setDisplayedRows] = useState(rows)
    const [sortedRows, isSortable, sortersData, sortToggled] = useSorter(
      rows,
      sorters,
    )
  
    useEffect(() => {
      setDisplayedRows([...sortedRows])
    }, [sortedRows])
  
    const handleSortToggled = (headerKey: string, isAsc: boolean) => {
      sortToggled(headerKey, isAsc)
    }
  
    return (
      <>
        <TableContext.Provider
          value={{ headers, isSortable, sortersData, handleSortToggled }}
        >
          <table>
            <thead>
              <tr>
                {Object.keys(headers).map((headerKey: string, index: number) => (
                  <Header headerKey={headerKey} key={'col' + index} />
                ))}
              </tr>
            </thead>
            <tbody>
              {displayedRows.map((row: Record<string, string>, index: number) => (
                <Row key={'row' + index} row={row} />
              ))}
            </tbody>
          </table>
        </TableContext.Provider>
      </>
    )
  }
  
  export default Table