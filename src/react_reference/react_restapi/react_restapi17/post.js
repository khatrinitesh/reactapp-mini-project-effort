import React,{ useState,useEffect} from 'react';

const  Post = ({url}) => {


    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [post, setPost] = useState([]);

        useEffect(() => {
            setIsError(false);
            setIsLoading(true);
            setPost([]);

            fetch(url)
            .then((res) => res.json())
            .then(setPost)    
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false))
        },[url])


        if(isLoading){
            return(
                <div>Loading....</div>
            )
        }

        if(isError){
            return(
                <div>{isError}</div>
            )
        }
  return (
    <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>
  )
}
export default Post;