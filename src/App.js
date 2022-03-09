import Button from './components/Button/Button'
import Activity from './components/Activity/Activity';
import SocialBar from './components/SocialBar/SocialBar';
import Modal from './components/Modal/Modal';
import ReactGA from 'react-ga'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const GA = 'UA-222484665-1'
  //setting google analytics
  const setGA = () => {
    ReactGA.initialize({GA});
    ReactGA.pageview('Init page view');
  };

  useEffect(()=>{
    setGA();
  },[])

  //State declarations
  const [activities, setActivities] = useState({});
  const [showActivity, setShowActivity] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // get activity api call function
  const getActivities = async () =>{
    try{
      const response = await axios.get('https://www.boredapi.com/api/activity')
      setActivities(response.data)
      setShowActivity(true)
      setShowModal(false);
    }catch{
      setShowModal(true)
      console.log('api is down')
    }
  }

  //close modal function
  const closeModal = () =>{
    setShowModal(false);
  }

  return (
    <div className='app'>
      {showModal ? <Modal className='modal-display' modalText='API is currently down'  closeModal={closeModal}/>: null}
      <div className='activity-container'>
        {showActivity ? <Activity className='activity-display' activity={activities}/>: null}
        <Button
          className='i-am-bored-button'
          handleClick={getActivities}
          buttonText={showActivity ? 'I\'m still bored' : 'I\'m bored'}
      />
      </div>
        <SocialBar />
    </div>
  );
}

export default App;
