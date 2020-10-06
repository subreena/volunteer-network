import React, { useEffect } from 'react';
import { useState } from 'react';
import '../../App.css'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import TaskData from '../TaskData/TaskData';
import Tasks from '../Tasks/Tasks';
const Home = () => {
    const [tasks, setTasks] = useState([]);
  useEffect(() => {
      fetch('https://shrouded-fjord-65980.herokuapp.com/allTask')
      .then(res => res.json())
      .then(data => setTasks(data))
  },[]);
  
    return (
        <>
        
            <div className="home">
            <Header></Header>
            <div className="home-content">
             <div className="container">
             <h1 className="text-center home-title">We Grow By Helping People In Need.</h1>
                <div className="input-group mb-3 input-group-lg" style={{ width: "60%", margin: "10px auto" }}>
                    <input type="text" className="form-control" placeholder="Search..." />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">Search</button>
                    </div>
                </div>
             </div>
             </div>
                </div>
                <div >
                <div className="container">
            <div className="task-card">
               
               <div className="row">
                    {
                        tasks.map(task => <Tasks task={task} key={task._id} ></Tasks>)
                    }
                </div>
               </div>
            </div>

                </div>
               <Footer></Footer> 
        </>
    );
};

export default Home;