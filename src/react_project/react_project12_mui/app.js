import React,{useState} from 'react';
import { Typography,Button,TextField,Box } from '@material-ui/core';
import Stack from '@mui/material/Stack';

const currentData = new Date();
const year = currentData.getFullYear()
const month = currentData.getMonth()+1
const date = currentData.getDate();
const currTime = currentData.getHours(2022,3,11,20);
console.log(year)

let greeting

const sty = {
    color:'red'
}

if(currTime < 10 && currTime >0){
    greeting = 'it is day and bright'
    sty.color = 'red'
}
else{
    greeting = 'it is night and dark'
    sty.color = 'green'
}
console.log(greeting)

const initialValues = {
    title:'',
    author:''
}

export default function CustomApp(){
    const [values,setValues] = useState(initialValues)

    const submit = () => {
        console.log(`submitted values ${values}`)
    }

    const onChange = (e) => {
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    return(
        
        <>
        {date} - {month} - {year} 
        <br/>
        {currTime}
         <Box sx={{height:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Typography variant="h2">Add a book</Typography>
            <form onSubmit={submit}>
                <Stack>
                    <TextField variant='outlined'
                    label="Title" 
                    name="title"
                    value={values.title}
                    onChange={onChange}/>
                    <TextField variant='outlined'
                    label="Author" 
                    name="author"
                    value={values.author}
                    onChange={onChange}/>
                </Stack>
                <Button variant="contained" type="Submit">Submit</Button>
            </form>
         </Box>
        </>
    )
}
