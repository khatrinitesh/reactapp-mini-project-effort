import { ErrorResponse } from '@remix-run/router';
import React from 'react';
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react';

export default function FormValidation() {

    const {register,handleSubmit,formState:{errors}} = useForm();

    const onSubmit = (value) => {
        console.log(value)
    }
  return (
    <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
                <label>Full Name</label>
                <input placeholder="Full Name" type="text" {...register('fullName',{required:true,maxLength:10})}/>
            </Form.Field>
            {errors.fullName && <p>Please check the fullname</p>}
            <Form.Field>
                <label>Company</label>
                <input placeholder="Company" type="text" {...register('company',{required:true,maxLength:10})}/>
                {errors.company && <p>Please check the company</p>}
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder="password" type="password" {...register('password',{required:true,pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,maxLength:10})}/>
                {errors.password && <p>Enter the  valid Password</p>}
                <Button type="submit">Submit</Button>
            </Form.Field>
        </Form>
    </div>
  )
}
