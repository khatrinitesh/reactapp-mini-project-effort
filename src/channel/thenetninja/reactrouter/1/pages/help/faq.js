import React, { useEffect ,useState} from 'react'

export default function Faq() {

  const [data,setData] = useState();

  const fetchData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    setData(data)
  }

  useEffect(() => {
    fetchData();
  },[])

  const btnRemove= (id) => {
    const finalData = data.filter((item) => item.id !== id)
    setData(finalData);
  }
  return (
    <div className="faq">
      <h3>Frequently Asked Questions</h3>

      <div className="question">
        {
          data.map((item) => {
            return(
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <button onClick={() => btnRemove(item.id)}>Remove</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
