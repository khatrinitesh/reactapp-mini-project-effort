import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export default function AutoComplete() {

    const items = [
        {
          id: 0,
          name: 'Cobol'
        },
        {
          id: 1,
          name: 'JavaScript'
        },
        {
          id: 2,
          name: 'Basic'
        },
        {
          id: 3,
          name: 'PHP'
        },
        {
          id: 4,
          name: 'Java'
        }
      ]
    
      const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
      }
    
      const handleOnFocus = () => {
        console.log('Focused')
      }
  return (
    <>
       <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
    </>
  )
}
