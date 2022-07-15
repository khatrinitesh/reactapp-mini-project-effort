import React from 'react'
import Table from './customtable'

function App() {
  const headers = {
    name: 'Name',
    origin: 'Origin',
    largestCountry: 'Largest Exporter',
    productionInBillions: 'Pruduction (BLN)',
  }

  const rows = [
    {
      name: 'Apple',
      origin: 'Spain',
      largestCountry: 'India',
      productionInBillions: '1.5',
    },
    {
      name: 'Mango',
      origin: 'India',
      largestCountry: 'India',
      productionInBillions: '1.9',
    },
    {
      name: 'Avocados',
      origin: 'America',
      largestCountry: 'America',
      productionInBillions: '1.9',
    },
    {
      name: 'PassionFruit',
      origin: 'America',
      largestCountry: 'America',
      productionInBillions: '1.7',
    },
  ]

  const sorters = {
    name: true,
    origin: true,
    productionInBillions: true,
  }
  return <Table headers={headers} rows={rows} sorters={sorters} />
}

export default App