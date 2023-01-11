import React,{useState} from 'react';


//  we need to create initialize a JS constant with a list of all items which will be later used in the application.
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

export default function SearchBar() {



    const [filteredList, setFilteredList] = useState(itemList);


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
    <>
    <div className="search-header">
        <div className="search-text">Search:</div>
        <input id="search-box" onChange={filterBySearch} />
    </div>
    <div id="item-list">
        <ol>
            {filteredList.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ol>
    </div>
   </>
);
}
