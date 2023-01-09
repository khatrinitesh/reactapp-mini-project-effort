import React,{useState} from 'react';
import JsonData from '../json/data1';


export default function DataTable() {

    // BELOW CODE FOR DATA ARAAY OBJECT FROM JSON DATA FILE
    const [user,setUser] = useState(JsonData);
    // BELOW CODE FOR DELETE BUTTON ARRAY ITEM
    const deleteByValue = (id) => {
         setUser(user.filter(item => item.id !== id));
         debugger;
    };
     

  return (
    <div>
        <table className="table table-striped">
            <thead>
             <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>City</th>
                <th>Status</th>
             </tr>
            </thead>
            <tbody>
            {user.map((val,index) => {
                return(
                    <tr key={index}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.city}</td>
                        <td>
                        
                        <button onClick={() => deleteByValue(val.id)}>&times;</button></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
  )
}
