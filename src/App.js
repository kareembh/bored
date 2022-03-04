import Button from './components/Button/Button'
import Activity from './components/Activity/Activity';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {

  //State declarations
  const [activities, setActivities] = useState({});
  const [showActivity, setShowActivity] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // get activity api call function
  const getActivities = async () =>{
    try{
      const response = await axios.get('ttps://www.boredapi.com/api/activity')
      setActivities(response.data)
      setShowActivity(true)
      setShowModal(false);
    }catch{
      setShowModal(true)
      console.log("api is down")
    }
  }

  //close modal function
  const closeModal = () =>{
    console.log("closing modal")
    setShowModal(false);
  }

  return (
    <div className="app">
      {showActivity ? <Activity className="activity-display" activity={activities}/>: null}
      {showModal ? <Modal className="modal-display" modalText='API is currently down'  closeModal={closeModal}/>: null}
      <Button
        className="i-am-bored-button"
        handleClick={getActivities}
        buttonText={showActivity ? 'I\'m still bored' : 'I\'m bored'}
      />
    </div>
  );
}

export default App;
