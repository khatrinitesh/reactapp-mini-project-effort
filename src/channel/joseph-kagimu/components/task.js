import React from 'react';

const CustomTask = ({task,deleteTodo,handleEdit,index}) => {
    return(
        <div className='task'>
            <h2>{task}</h2>
            <button className='btn_del' onClick={() => deleteTodo(index)}>Delete</button>
            <button className='btn_edit' onClick={() => handleEdit(index)}>Edit</button>
        </div>
    )
}

export default CustomTask;