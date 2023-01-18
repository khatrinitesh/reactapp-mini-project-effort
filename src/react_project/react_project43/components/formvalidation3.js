import React,{useState} from 'react'

export default function FormValidationThree(onSignup) {

    const [emailId,setEmailId] = useState('');
        
    const isAuthentic = emailId != null && emailId.trim().length > 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSignup({emailId})
    }
  return (
    <>
     <form onSubmit={handleSubmit}>
        <label>EmailId</label>
        <input type="email" value={emailId} onChange={e => setEmailId(e.target.value)}/>
        <button disabled={!isAuthentic}>Sign up</button>
     </form>
    </>
  )
}
