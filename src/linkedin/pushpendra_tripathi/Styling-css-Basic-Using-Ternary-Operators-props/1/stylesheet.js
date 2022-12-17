import React from 'react';
import './custom.css';

const StyleSheet = (props) => {

    const className = props.isValue ? 'Head1' : 'Head2'
    const className2 = props.isActive ? 'Bg1' : 'Bg2'
    return(
        <>
         <h1 className={`${className} Head3`}>NItesh Khatri</h1>
         <p className={`${className2} BgProperty`}>Sameet Khatri</p>
        </>
    )
}

export default StyleSheet;
