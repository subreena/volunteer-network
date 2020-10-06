import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddedTask from './AddedTask';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Admin = () => {
    const [addedTask , setAddedTask] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-fjord-65980.herokuapp.com/addTask' , {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}
    })
        .then(res => res.json())
        .then(data => {
            setAddedTask(data)})
    },[])
    
    return (
        <>
        <Header></Header>
        <div className="container" style={{minHeight: "100vh"}}>
            <h2 className="text-center">Hello Admin!</h2>
            <hr/>
            <div className="row">
                <div className="col-12 col-md-3 col-lg-3">
                <div>
                    <br/>
                  <Link to="/admin">  <p> Volunteer Registerations list  </p> </Link> 
                  <Link to="/addEvent">  <p>
                  <img src={require('../../images/logos/plus 1.png')} alt="" width="16" height="16"/> 
                  Add Event</p>

                    </Link> 
                </div>
                </div>
                <div className="col-12 col-md-9 col-lg-9">
                <div>
                <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Registration Date</th>
                        <th>Volunteer list</th>
                        <th>Action</th>
                    </tr>
                </thead>
                
                  <tbody>
                        {
                            addedTask.map(task => <AddedTask task={task} key={task._id} ></AddedTask>)
                        }
                   
                   </tbody>
               </table>
                </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
}

export default Admin;