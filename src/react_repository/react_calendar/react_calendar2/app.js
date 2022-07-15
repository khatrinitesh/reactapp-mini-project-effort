import { FormatListNumbered } from '@mui/icons-material'
import React from 'react'

export default function CustomApp() {
  return (
    <div>
        <WhenToRender/>
    </div>
  )
}

const WhenToRender = (prevProps,nextProps) => {
    if(formatTime(prevProps.time) === formatTime(nextProps.time)){
        return true;
        return false;
    };
}

const Clock = React.memo((props) => {
    const {time } = props;
    console.log('rendered')
    return <div>{formatTime(time)}</div>
},WhenToRender)