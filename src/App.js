import Button from './components/Button/Button'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Activity from './components/Activity/Activity';

function App() {

  const [activities, setActivities] = useState({})
  const [showActivity, setShowActivity] = useState(false)

  const getActivities = async () =>{
    try{
      const response = await axios.get('https://www.boredapi.com/api/activity')
      setActivities(response.data)
      setShowActivity(true)
    }catch{
      console.log("api is down")
    }
  }

  return (
    <div className="App">
      {showActivity ? <Activity activity={activities}/>: null}
     <Button 
        getActivities={getActivities}
        buttonText={showActivity ? 'I\'m still bored' : 'I\'m bored'}
      />
    </div>
  );
}

export default App;
