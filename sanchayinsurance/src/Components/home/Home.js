import React, { useState } from 'react'
import Navbar from './../../sharedComponents/Navbar';
import Login from '../login/Login';
import HomeDashboard from './HomeDashboard';
import CustomerRegister from './../Customer/CustomerRegister';
import Contact from './../../sharedComponents/Contact';


const Home = () => {
  const [activeComponent, setActiveComponent] = useState('homedashboard'); 

  const renderComponent = () => {
    switch (activeComponent) {
      case 'homedashboard':
        return <HomeDashboard/>;
      case 'login':
        return <Login />;
      case 'register':
        return <CustomerRegister />;
      case 'contactus':
          return <Contact />;
      
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar setActiveComponent={setActiveComponent} />
      {renderComponent()}
    </div>
  )
}

export default Home