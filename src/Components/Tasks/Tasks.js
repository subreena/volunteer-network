import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TaskData from '../TaskData/TaskData';

const Tasks = (props) => {
    const {name , img , bgColor} = props.task;
    const history = useHistory()
    const handleTask = () => {
        history.push(`/register/${name}`)
        fetch('https://shrouded-fjord-65980.herokuapp.com/addTask' , {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(TaskData)
        })
    }
  
    return (
        <>
        <div className="col-6 col-md-3 col-lg-3">
        <Link to={`/register/${name}`} onClick={() => handleTask}>
        <div className="card" style={{background: `${bgColor}`}}>
    <img src={img} className="card-img-top img-fluid w-100" height="120" alt={name}/>
    <div className="card-body" style={{background: `${bgColor}`}}>
    <h5 className="card-title text-light">{name}</h5>
    </div>
  </div>
        </Link>
        </div>
        </>
    );
};

export default Tasks;