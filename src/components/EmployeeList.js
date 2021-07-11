import React from 'react'

export default function EmployeeList() {
    const employee=[
        {
            id:123,
            name:"ram",
            role:"designer",
            salary:2000
        },
        {
            id:124,
            name:"sham",
            role:"testing",
            salary:2200
        },
        {
            id:125,
            name:"vinay",
            role:"support",
            salary:2500
        },
        {
            id:126,
            name:"raju",
            role:"accounts",
            salary:2000
        },
    ]
    return (
        <div>
           <div className="container mt-3">
           <table border className="text-center border bg-light"  width="90%" cellPadding="20px" cellSpacing="20px" rules="all">
               <tr>
                   <th>Employee ID</th>
                   <th>NAME</th>
                   <th>ROLE</th>
                   <th>SALARY</th>
               </tr>
               {employee.map((data)=>
               {
                   return <tr>
                          <td>{data.id}</td>
                          <td>{data.name}</td>
                          <td>{data.role}</td>
                          <td>{data.salary}</td>
                          </tr>
               })}
           </table>
           </div>
        </div>
    )
}
