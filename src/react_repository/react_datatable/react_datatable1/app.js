import React,{useMemo } from 'react';
import Table from "./customtable";
import data from "./users.json";
import './custom.css';


export default function CustomApp() {
    const columns = useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                Header: "Name",
                accessor: "name",
            },
            {
                Header: "Username",
                accessor: "username",
            },
            {
                Header: "Email",
                accessor: "email",
            },
            {
                Header: "Phone",
                accessor: "phone",
            },
        ],
        []
    )
  return (
    <div>
        <div className="App">
            <Table columns={columns} data={data} />
        </div>
    </div>
  )
}

