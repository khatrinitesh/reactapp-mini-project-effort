import React,{useState} from 'react'

export default function CustomApp() {

    const [user,setUser] = useState({
        fname:'nitesh',
        lname:'khatri',
        age:33,
        level:'master',
        bio: "",
        version:"888",
        hooks:true
    })

    function handleInputChange(e){
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setUser({
            ...user,
            [e.target.name] :value,
        })
    }
  return (
    <div>
        <input type='text' name='fname' value={user.fname} onChange={handleInputChange}/> 
        <br/>
        <input type='text' name='lname' value={user.lname} onChange={handleInputChange}/> 
        <br/>
        <input type='text' name='age' value={user.age} onChange={handleInputChange}/> 
        <br/>
        <textarea name="bio" value={user.bio} onChange={handleInputChange} ></textarea>
        <form>
            <label>
                Favorite version
                <select name='version' value={user.version} onChange={handleInputChange}>
                    <option value="16.8">v16.8.0</option>
                    <option value="16.7">v16.7.0</option>
                    <option value="16.6">v16.6.0</option>
                    <option value="16.5">v16.5.0</option>
                </select>
            </label>
            <div>
                <label>
                    Acolyte
                    <input type='radio' name="level" value='acolyte' onChange={handleInputChange} checked={user.level === 'acolyte'}/>
                </label>
                <label>
                    Master
                    <input type='radio' name="level" value='master' onChange={handleInputChange} checked={user.level === 'master'}/>
                </label>
            </div>
            <div>
                <label>
                    <strong>with hooks</strong>
                    <input type='checkbox' name="hooks" checked={user.hooks} onChange={handleInputChange}/>
                </label>
            </div>
        </form>
        <div><strong> First Name:</strong> {user.fname}</div>
        <div><strong> Last name:</strong> {user.lname}</div>
        <div><strong> Age:</strong> {user.age}</div>
        <div><strong> Bio:</strong> {user.bio}</div>
        <div><strong> Version:</strong> {user.version}</div>
        <div><strong> Level:</strong> {user.level}</div>
    </div>
  )
}
