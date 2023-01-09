import React from 'react';

export default function Items({data}) {
  return (
    <div className='row'>
        {data.map((val) => {
            const {id,image,title,description} = val;
            return(
                <div className='col-sm-3' key={id}>
                    <div className='card bg-light text-center'>
                        <img src={image} className="img-fluid" style={{height:'200px'}}/>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
