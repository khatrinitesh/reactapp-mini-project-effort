import React,{useState} from 'react';

const itemList = [
    "Apple",
    "Orange",
    "Banana",
    "Cherry",
    "Milk",
    "Peanuts",
    "Butter",
    "Tomato"
];

export default function SearchFilter() {

    const [filteredList, setFilteredList] = new useState(itemList);

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...itemList];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
          return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
      };
  return (
    <div>
        <div className="search-header">
            <label className="search-text">Search:</label>
            <input id="search-box" onChange={filterBySearch} />
        </div>
        <div id="item-list">
            <ol>
                {filteredList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </div>
    </div>
  )
}
