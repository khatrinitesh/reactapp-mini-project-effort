import React,{useState} from 'react';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Box from '@mui/material/Box';

export default function CustomListener() {

    const [open,setOpen] = useState(false);

    const handleClickAway = () => {
        setOpen(false);
    }

    const handleClickEvent = () => {
        setOpen((prev) => !prev);
    }
   
  return (
    <div>
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ position: 'relative' }}>
                <button type="button" onClick={handleClickEvent}>
                Open menu dropdown
                </button>
                {open ? (
                <Box>
                    Click me, I will stay visible until you click outside.
                </Box>
                ) : null}
            </Box>
        </ClickAwayListener>
    </div>
  )
}
