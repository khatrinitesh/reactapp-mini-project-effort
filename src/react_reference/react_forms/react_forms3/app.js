import React,{useState} from 'react'

export default function CustomApp() {

    // const [formData, setFormData] = useState({
    //     username: 'default',
    //     email: 'default@gmail.com',
    //     occupation: 'student',
    //     gender: 'male',
    //     languages: ['html'],
    //   })
    
    //   const onChangeHandler = (event) => {
    
    //     console.log(event)
    //     if (event.target.name === 'languages') {
    
    //       let copy = { ...formData }
    
    //       if (event.target.checked) {
    //         copy.languages.push(event.target.value)
    //       } else {
    //         copy.languages = copy.languages.filter(el => el !== event.target.value)
    //       }
    //       setFormData(copy)
    
    //     } else {
    //       setFormData(() => ({
    //         ...formData,
    //         [event.target.name]: event.target.value
    //       }))
    //     }
    //   }
    
    //   const onSubmitHandler = (event) => {
    //     event.preventDefault()
    //     console.log(formData)
    //   }

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        cpassword: '',
        occupation: '',
        gender: '',
        languages: [],
      })
    
      const [formError, setFormError] = useState({})
    
      const onChangeHandler = (event) => {
    
        console.log(event)
        if (event.target.name === 'languages') {
    
          let copy = { ...formData }
    
          if (event.target.checked) {
            copy.languages.push(event.target.value)
          } else {
            copy.languages = copy.languages.filter(el => el !== event.target.value)
          }
    
          setFormData(copy)
    
        } else {
          setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value
          }))
        }
      }
    
      const validateForm = () => {
        let err = {}
    
        if (formData.username === '') {
          err.username = 'Username required!'
        }
        if (formData.email === '') {
          err.email = 'Email required!'
        } else {
          let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          if (!regex.test(formData.email)) {
            err.email = 'Email not valid!'
          }
        }
    
        if (formData.password === '' || formData.cpassword === '') {
          err.password = 'Password and Confirm Password required!'
        } else {
          if (formData.password !== formData.cpassword) {
            err.password = 'Password not matched!'
          } else {
            if (formData.password.length < 6) {
              err.password = 'Password should greater than 6 characters!'
            }
          }
        }
    
        if (formData.occupation === '') {
          err.occupation = 'Occupation required!'
        }
        if (formData.gender === '') {
          err.gender = 'Gender required!'
        }
        if (formData.languages.length < 1) {
          err.languages = 'Any one language required!'
        }
    
        setFormError({ ...err })
    
        return Object.keys(err).length < 1;
      }
    
      const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log("Form Data:", formData)
        let isValid = validateForm()
    
        if (isValid) {
          alert('Submitted')
          //API call to server
        } else {
          alert('In-Valid Form')
        }
        console.log(isValid)
      }
  return (
    <div>
        <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">User Name</label>
          <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
          <span className='non-valid'>{formError.username}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
          <span className='non-valid'>{formError.email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input className="form-control" name="password" onChange={onChangeHandler} value={formData.password} />
          <span className='non-valid'>{formError.password}</span>
        </div>
        <div className="form-group">
          <label htmlFor="occupation" className="form-label">Occupation</label>
          <select className="form-select" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender</label>
          <div>
            <div>
              <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
              <label htmlFor="other">Other</label>
            </div>
            <span className='non-valid'>{formError.gender}</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Languages</label>
          <div>
            <div>
              <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1} />
              <label htmlFor="html">HTML</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1} />
              <label htmlFor="css">CSS</label>
            </div>
            <div>
              <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
              <label htmlFor="javascript">Javascript</label>
            </div>
            <span className='non-valid'>{formError.languages}</span>
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit" >Submit</button>
        </div>
      </form>
    </div>
  )
}
