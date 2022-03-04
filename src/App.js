import Button from './components/Button/Button'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Activity from './components/Activity/Activity';

function App() {

  //State declarations
  const [activities, setActivities] = useState({});
  const [showActivity, setShowActivity] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  // Function declarations
  const getActivities = async () =>{
    try{
      const response = await axios.get('https://www.boredapi.com/api/activity')
      setActivities(response.data)
      setShowActivity(true)
    }catch{
      // setShowModal(true)
      console.log("api is down")
    }
  }

  return (
    <div className="app">
      {showActivity ? <Activity className="activity-display" activity={activities}/>: null}
      <Button
        className="i-am-bored-button"
        getActivities={getActivities}
        buttonText={showActivity ? 'I\'m still bored' : 'I\'m bored'}
      />
    </div>
  );
}

export default App;
