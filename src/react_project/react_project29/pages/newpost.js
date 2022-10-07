import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NewPostForm from '../components/newpostform';
import {savePost} from '../utils/api';

export default function NewPost() {

    const [isSubmitting,setIsSubmitting]  = useState(false);
    const [error,setError] = useState();
    const navigate = useNavigate();

    async function submitHandler(e){
        e.preventDefault();
        setIsSubmitting(true);
        try{
            const formData = new FormData(e.target);
            const post = {
                title:formData.get('title'),
                body:formData.get('post-text'),
            };
            await savePost(post);
            navigate('/')
        }
        catch(err){
            setError(err)
        }
        setIsSubmitting(false);
    }

    function cancelHandler(){
        navigate('/blog');
    }
  return (
    <>
        {error && <p>{error.message}</p>}
        <NewPostForm onCancel={cancelHandler} onSubmit={submitHandler} submitting={isSubmitting}/>
    </>
  )
}
