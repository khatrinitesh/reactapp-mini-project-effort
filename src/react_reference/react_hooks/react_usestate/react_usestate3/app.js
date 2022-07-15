import React,{useState} from 'react'

export default function CustomApp() {

    const [state, setState] = useState({
        fullName: "",
        email: "",
        password: "",
        address: "",
        color: "",
        city: "",
        state: "",
        zip: 0,
        checkMe: true
      })

      const handleChange = (e) => {
        const name = e.target.name ;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setState({
            ...state,
            [name]:value
        })
      }

      function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(state)
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" 
                name="fullName" 
                value={ state.fullName } 
                onChange={ handleChange } />

            <input type="password" 
                name="password" 
                value={ state.password } 
                onChange={ handleChange } />

            <input type="email" 
                name="email" 
                value={ state.email } 
                onChange={ handleChange } />

            <textarea 
                name="address" 
                value={ state.address } 
                onChange={ handleChange } />

            <input type="color" 
                name="color" 
                value={ state.color } 
                onChange={ handleChange } />

            <input type="city" 
                name="city" 
                value={ state.city } 
                onChange={ handleChange } />

            <select name="state" 
                onChange={ handleChange } value={ state.state }>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                
            </select>


            <input type="zip" 
                name="zip" 
                value={ state.zip } 
                onChange={ handleChange } />


            <input type="checkbox" 
                name="checkMe" 
                checked={ state.checkMe } 
                onChange={ handleChange } />

            <button>Submit</button>
        </form>
    </div>
  )
}
    