import React,{useState} from 'react'

export default function CustomApp() {
  return (
    <div>
      https://www.linkedin.com/feed/update/urn:li:activity:7006817284484685824/
    </div>
  )
}


const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const LoginUser = async (event) => {
        event.preventDefault();
        const response = await fetch('')
    }
}
