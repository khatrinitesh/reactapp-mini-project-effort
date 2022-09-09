import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';


export default function CustomList({id,text,dltitems}) {
  return (
    <>
     <div className='items'>
        <li>{text}</li>
        <Tooltip title="Delete">
            <Button className='button' onClick={() => dltitems(id)}>
                <DeleteIcon/>
            </Button>
        </Tooltip>
     </div>
    </>
  )
}
