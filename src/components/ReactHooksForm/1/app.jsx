import React, { useState } from 'react';


export default function CustomApp() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
      });

      const [errors,setErrors] = useState({});

      const validate = (values) => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Name is required';
        }
        if (!values.email) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = 'Email address is invalid';
        }
        return errors;
      };
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate(formData);
        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
          console.log('Form Data Submitted:', formData);
        }
      };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}
