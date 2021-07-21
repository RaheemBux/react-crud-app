const Table = (props) =>{
    const {list,border,view,deleteUser} = props
    return (
        <div className = "users">
           <table border = {border}>
               <thead>
                   <th>ID</th>
                   <th>Name</th>
                   <th>User Name</th>
                   <th>Email</th>
                   <th>Mobile #</th>
                   <th colSpan = "2" >Action</th>
               </thead>
               <tbody>
                   {
                        list.map(record=>{
                           return <tr>
                               <td>{record.id}</td>
                               <td>{record.firstName}</td>
                               <td>{record.userName}</td>
                               <td>{record.email}</td>
                               <td>{record.mobileNo}</td>
                               <td><button onClick = {() => view(record.id)}>Update</button></td>
                               <td><button onClick = {() => deleteUser(record.id)}>Delete</button></td>
                           </tr>
                       })
                   }
               </tbody>
           </table>
        </div>       
    )
}
export default Table;