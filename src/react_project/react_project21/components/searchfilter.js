import React,{useState} from 'react';
import Service from '../pages/service';

export default function SearchFilter() {
    const [filteredList, setFilterdList] = new useState(Service);
    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...Service];
    
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
          return item.toLowerCase().indexOf(query.toLowerCase()) !== -1
        });
        setFilterdList(updatedList);
      };


  return (
    <div>
        <input type="text" onChange={filterBySearch} />
        <ul>
            {filteredList.map((item) => {
            return <li>{item}</li>;
            })}
        </ul>
    </div>
  )
}
