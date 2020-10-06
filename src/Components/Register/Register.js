import React, { useContext, useEffect, useState } from 'react';

import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Register = () => {
    const { name } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
    const [event, setEvent] = useState({ description: '', date: '' });
    const [tasks, setTasks] = useState([]);
  
  

  
    const handleBlur = (e) => {
        const newEvent = { ...event };
        newEvent[e.target.name] = e.target.value;
        setEvent(newEvent);
    }

   

       useEffect(()=> {
        fetch('https://shrouded-fjord-65980.herokuapp.com/allTask' , {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            setTasks(data)})
    },[])
  
//   HANDLE SUBMIT 
 const handleSubmit = () =>{
     const task = tasks.find(task => task.name === name);
     const data = {...loggedInUser , ...task , ...event }
    // console.log(data);
     fetch('https://shrouded-fjord-65980.herokuapp.com/addTask',{
         method: 'POST',
         headers: { 'Content-Type': 'application/json'},
         body: JSON.stringify(data)
     })
     
 
}
 const email = loggedInUser.email;
    return (
       <>
            <div className="login-form">
                <div className="container">
                    <header className="d-flex align-items-center justify-content-center">
                       <Link to="/">
                       <img src={require('../../images/logos/Group 1329.png')} alt="" width="250" />
                       </Link>
                    </header>
                    <div className="login-form-content">
                        <form className="form">

                            <div className="form-group">
                                <input type="text" name="displayName" id="" className="form-control"  placeholder={loggedInUser.displayName} />
                            </div>

                            <div className="form-group">
                                <input type="email" className="form-control"  placeholder={email} name="email" />
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control" onBlur={handleBlur}  placeholder="Date" name="date" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" onBlur={handleBlur} placeholder="Description" name="description" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder={`Volunteer For ${name}`} name="name" />
                            </div>
                           <Link to={`/task-chosen/${email}`} onClick={handleSubmit}>
                           <button className="btn btn-primary w-100">Register</button>
                           </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Register;