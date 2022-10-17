import React from 'react';

export default function CustomApp() {

    const onClickHandler= () => {
        console.log(onClickHandler)
    }
    const onDblClickHandler= () => {
        console.log(onDblClickHandler)
    }
    const onMouseOverHandler= () => {
        console.log(onMouseOverHandler)
    }
    const onChangeHandler= (e) => {
        console.log(e.target.name + ':' + e.target.value)
    }

    const handleSubmit= (e) => {
        e.preventDefault()
        console.log('on Submit event handler')
    } 
    const onCopyHandler= (e) => {
        e.preventDefault()
        console.log('why are you copyring')
        console.log('onCopy event triggered')
    } 

    const onPasteHandler = (e)=> {
        e.preventDefault()
        console.log('why are you pasting')
        console.log('onPaste event triggered')
    }

    const onKeyHandler = (e)=> {
        e.preventDefault()
        console.log('onKeyHandler event triggered')
    }

    
  return (
    <div>

        {/* ONCLICK */}
        <div onClick={onClickHandler}>onClick Div</div>
        <button onClick={onClickHandler}>onClick Div</button>

        {/* ONDOUBLE CLICK */}
        <div onDoubleClick={onDblClickHandler}>onDblClickHandler Div</div>
        <button onDoubleClick={onDblClickHandler}>onDblClickHandler Div</button>

        {/* ONMOUSEOVER */}
        <div onMouseOver={onMouseOverHandler}>onMouseOver Div</div>
        <button onMouseOver={onMouseOverHandler}>onMouseOver Div</button>

        <hr/>
        <label htmlFor="onChange">Label</label>
        <input type="text" onChange={onChangeHandler} name="randomText"/>

        <hr/>

        <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First name:</label>
            <input type="text" id="fname" name="fname"/>
            <br/>
            <label htmlFor="lname">Last name:</label>
            <input type="text" id="lname" name="lname"/>
            <br/>
            <button>Submit</button>
        </form>

        <hr/>

        {/* ONCOPY */}
        <div onCopy={onCopyHandler}>onCopy div</div>

        {/* ONPASTE */}
        <input onPaste={onPasteHandler}/>

        <hr/>

        {/* ONKEY */}
        <input onKeyPress={onKeyHandler}/>

    </div>
  )
}
