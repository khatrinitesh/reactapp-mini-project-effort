import React,{useMemo,useState,useRef} from 'react'

export default function CustomApp() {

    const [items,setItems] = useState([]);
    const [query, setQuery] = useState("")
    const inputRef = useRef();

    const filteredItems  = useMemo(() => {
        return items.filter(item => {
            return item.toLowerCase().includes(query.toLowerCase())
        })
    },[items,query])

    const queryChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = inputRef.current.value
        if(value === '') return
        setItems(prev => {
            return [...prev,value]
        })
        inputRef.current.value = ""
    }    
  return (
    <div>
        Search:
        <input type='search' onChange={queryChange}/>
        <br/>
        <br/>
        <form onSubmit={handleSubmit}>
            New Item: <input type="text" ref={inputRef}/>
            <button type='submit'>Add</button>
        </form>
        <h3>Items:</h3>
        {filteredItems.map(item => (
            <div>{item}</div>
        ))}
    </div>
  )
}
