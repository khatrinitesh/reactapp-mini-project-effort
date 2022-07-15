import { useEffect, useState } from 'react'
import { TableConfig } from './TableConfig'

type SorterProps = [
  TableConfig.Row[],
  boolean,
  TableConfig.Sorter | undefined,
  (headerKey: string, isAsc: boolean) => void,
]

export const useSorter = (
  rows: TableConfig.Row[],
  sorters?: TableConfig.Sorter,
): SorterProps => {
  const isSortable = Boolean(sorters)
  const [sortedRows, setSortedRows] = useState(rows)
  const [sortersData, setSortersData] = useState(sorters)
  const [currentSort, setCurrentSort] = useState('')

  useEffect(() => {
    if (!isSortable || currentSort === '') {
      return
    }

    const sortedRows = rows.sort(
      (a: Record<string, string>, b: Record<string, string>) => {
        if (sortersData![currentSort]) {
          return a[currentSort] < b[currentSort] ? 1 : -1
        } else if (!sortersData![currentSort]) {
          return a[currentSort] > b[currentSort] ? 1 : -1
        }

        return 0
      },
    )
    setSortedRows([...sortedRows])
  }, [sortersData])

  const sortToggled = (headerKey: string, isAsc: boolean) => {
    if (!isSortable) {
      return
    }
    const newIsAsc = !isAsc
    sortersData![headerKey] = newIsAsc
    setCurrentSort(headerKey)
    setSortersData({ ...sortersData })
  }

  return [sortedRows, isSortable, sortersData, sortToggled]
}