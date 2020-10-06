import React, { useState } from 'react';


const UserTasks = (props) => {
  let [deleted, setDeleted] = useState({
    delete: false,
    display: "",
  });
  const { name, bgColor, img ,date, displayName, _id } = props.task;

  // DELETE TASK
  const handleDelete = (id) => {
    fetch(`https://shrouded-fjord-65980.herokuapp.com/delete/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then((result => {
        if (result) {
          setDeleted({
            delete: true,
            display: "none",
          });
          alert("Task Deleted")
        }

      }
      ));
  }
  return (
    <>

  
         
            <div style={{ display: `${deleted.display}` }} className="col-12 col-md-6 col-lg-6">
              <div className="img-card m-3" style={{border: `3px solid ${bgColor}` , borderRadius: `15px`}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={img} className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8 d-flex align-items-center justify-content-center">
                    <div className="img-card-body">
                      <h4 className="card-title">{name}</h4>

                      <p className="card-text">{date}</p>
                      <button className="btn btn-danger" onClick={() => handleDelete(`${_id}`)}>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
         
   
     

  </>
    );
};

export default UserTasks;