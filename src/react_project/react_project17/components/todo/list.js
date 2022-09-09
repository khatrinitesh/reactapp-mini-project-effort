import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';

const CustomList = ({id,text,dltitems}) => {
  return (
    <div className='items'>
        <li>{text}</li>
        <Tooltip title='delete'>
            <Button className="dlbtn" onClick={() => dltitems(id)}>
                <DeleteIcon/>
            </Button>
        </Tooltip>
    </div>
  )
}

export default CustomList;