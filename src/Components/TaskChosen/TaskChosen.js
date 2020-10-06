import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import UserTasks from './UserTasks';

const TaskChosen = () => {
  
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [tasks, setTasks] = useState([]);
    
     useEffect(() =>{
        fetch(`https://shrouded-fjord-65980.herokuapp.com/addTask/` + loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setTasks(data)
        },[])
    },)
    
    
    return (
        <>
        <Header></Header>
        <div className="container" style={{minHeight: "100vh"}}>
            <div className="row">
            {
             tasks.map(task => <UserTasks task={task} key={task._id}></UserTasks>)
            }
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default TaskChosen;