import React,{useState,useEffect} from 'react';


const CustomApp = () => {

    const [post,setPost] = useState([]);
    const [number,setNumber] = useState(1); // no of pages 
    const postPerPage =20;
    const lastPost = number * postPerPage;
    const firstPost = lastPost - postPerPage;
    const currentPost = post.slice(firstPost,lastPost)

    const pageNum = [];

    for(let i=1;i<=Math.ceil(post.length / postPerPage);i++){
        pageNum.push(i);
    }

    const changePage = (pageNum) => {
        setNumber(pageNum)
    }
   

    useEffect(() => {
        const fetchapi = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/comments`)
            const res = await data.json();
            setPost(res);
        }
        fetchapi()
    },[])
  return (
    <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <table>
                        <thead>
                            <tr className='border-2 border-dark text-center my-2'>
                                <th className="col-1 border-2 border-dark fs-4 text-capitalize">
                                    S No.
                                </th>
                                <th className="col-1 border-2 border-dark fs-4 text-capitalize">
                                    Name
                                </th>
                                <th className="col-1 border-2 border-dark fs-4 text-capitalize">
                                    Email
                                </th>
                                <th className="col-1 border-2 border-dark fs-4 text-capitalize">
                                    Comment
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPost.map((val) => {
                                return(
                                    <>
                                        <tr className='border-2 border-dark text-center' key={val.id}>
                                            <td className='border-2 border-dark text-capitalize'>{val.id}</td>

                                            <td className='border-2 border-dark text-capitalize'>{val.name}</td>

                                            <td className='border-2 border-dark text-capitalize'>{val.email}</td>

                                            <td className='border-2 border-dark text-capitalize'>{val.body}</td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
                <div className='my-3 text-center'>
                    <button onClick={() => setNumber(number - 1)} className='px-3 py-1 text-center btn-primary'>
                        Prev
                    </button>
                    {pageNum.map((elem) => {
                        return(
                            <>
                             <button onClick={() => changePage(elem)} className='px-3 py-1 m-1 text-center btn-outline-break'>{elem}</button>
                            </>
                        )
                    })}
                    <button onClick={() => setNumber(number + 1)} className='px-3 py-1 text-center btn-primary'>Next</button>
                </div>
            </div>
        </div>
    </div>
  )
}


export default CustomApp;
