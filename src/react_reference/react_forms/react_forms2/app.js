import React from 'react';
import {useForm} from 'react-hook-form';

export default function CustomApp(){
    return(
        <>
            <FormExample/>
        </>
    )
}

function FormExample (){
    const {register,handleSubmit,formState:{errors}} = useForm();
    const onSubmit = (data) => console.log(data)

    return(
        <>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName')}/>
            <input {...register('lastName',{required:true})}/>
            <input {...register('age',{required:true,pattern:'/\d+/ >'})}/>
            {errors.lastName && <p>Last name is required.</p>}
            {errors.age && <p>Please enter number for age.</p>}
            <input type="submit"/>
         </form>
        </>
    )
}