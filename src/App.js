import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProfilePhoto from './Component/Profie/ProfilePhoto';
import FullName from './Component/Profie/FullName';
import Adress from './Component/Profie/Adress';

function App() {
  return (
    <React.Fragment>
      <div style={{"display":"flex","flexDirection":"column","alignItems":"center","height":"100vh","justifyContent":"center","backgroundImage":"url(https://gomytech.gomycode.co/content/images/2020/12/bah-launch-01-min.jpg)","backgroundSize":"cover"}}>
        <ProfilePhoto/>
        <FullName/>
        <Adress/>
      </div>
      
    </React.Fragment>
  );
}

export default App;
