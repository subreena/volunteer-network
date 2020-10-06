import React, { useEffect, useState } from 'react';

const AddedTask = (props) => {
   
    let [deleted, setDeleted] = useState({
        delete: false ,
        display: "" ,
     });

    const {displayName , name , email  , bgColor , _id , date} = props.task;

   
    useEffect(() => {
        fetch('https://shrouded-fjord-65980.herokuapp.com/addTask')
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                setDeleted(false);
            })
    }, [])

    // DELETE TASK
    const handleDelete = (id) => {
        fetch(`https://shrouded-fjord-65980.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then((result => {
            if (result) {
                setDeleted({
                   delete: true ,
                   display:"none" ,
                });
            }
                   
                }
            ));
    }
    
    return (
        <>
    

        <tr style={{display : `${deleted.display}`}}>
        <td>{displayName}</td>
        <td>{email}</td>
        <td>{date}</td>
        <td style={{color: `${bgColor}`}}>
            {name}
            </td>
        <td>
            <button className="btn btn-danger" onClick={()=> handleDelete(`${_id}`)}>Delete</button>
        </td>
        </tr>
    
        </>
        );
};

export default AddedTask;