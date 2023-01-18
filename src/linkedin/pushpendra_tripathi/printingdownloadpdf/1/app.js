import React from 'react';

export default function CustomApp() {
  return (
    <div>
        <table cellSpacing='0' style={{border:'1px solid red'}} border='1'>
            <thead>
                <tr>
                    <th>File name</th>
                    <th>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    dummy.js
                    </td>
                    <td>
                        <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank" style={{margin:'4px'}}>print</a>
                    </td>
                </tr>
                <tr>
                    <td>
                        script.js
                    </td>
                    <td>
                        <a href="https://www.tutorialspoint.com/javascript/javascript_tutorial.pdf" target="_blank" style={{margin:'4px'}}>print</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
