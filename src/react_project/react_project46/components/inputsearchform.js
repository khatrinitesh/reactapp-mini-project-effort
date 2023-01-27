import React,{ useState, useEffect }  from 'react'


export default function InputSearchForm() {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        let timeoutId;
        if (searchTerm) {
          timeoutId = setTimeout(() => {
            // update the search results
            setSearchResults(
                searchResults.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
            );
          }, 800);
        }
        return () => clearTimeout(timeoutId);
      }, [searchTerm]);

  return (
    <div>
        <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
        />
        <ul>
            {searchResults.map(item => (
            <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
  )
}
