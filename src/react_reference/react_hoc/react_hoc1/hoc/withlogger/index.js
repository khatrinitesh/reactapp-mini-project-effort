import React from 'react';

const withLogger = (WrappedComponent,color) => {
    const Properties = (...args) => {
        console.log(...args)
        return(
            <div style={{padding:'15rem',background:color}}>
                <WrappedComponent {...args}/>
            </div>
        )
    }
    return Properties;
}

export default withLogger;