import React from 'react';
import {useParams,useOutletContext} from 'react-router-dom';

export default function Books() {

    const {id} = useParams();
    const context = useOutletContext()
  return (
    <div>
        <h1>Book {id} {context.hello}</h1>
    </div>
  )
}
