import React,{useState} from 'react';
import ClickAwayListener from '@mui/base/ClickAwayListener';

export default function CustomApp() {

    const [open,setOpen] = useState(false);

    const handleClickAway = () => {
        setOpen(false);
    }

    const handleClickEvent = () => {
        setOpen((prev) => !prev);
    }
  return (
    <div style={{display:'block',padding:30}}>
        <ClickAwayListener onClickAway={handleClickAway}>
         <div>
            <button type='button' onClick={handleClickEvent}>Open Dropdown</button>
            {open ? (
                <p>Click me, i will say</p>
            ) : null}
         </div>
        </ClickAwayListener>
    </div>
  )
}
