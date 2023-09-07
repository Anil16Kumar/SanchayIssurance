import React, { useState } from 'react'
import Navbar from './../../sharedComponents/Navbar';
import HomeDashboard from './HomeDashboard';
import CustomerRegister from './../Customer/CustomerRegister';
import Contact from './../../sharedComponents/Contact';
import PlanServices from '../../services/PlanServices';
// import Login from '../login/Login';
import Login from '../login/login';


const Home = () => {
  const [activeComponent, setActiveComponent] = useState('homedashboard');
  const[selectedPlan,setSelectedPlan]=useState(''); 

  const renderComponent = () => {
    switch (activeComponent) {
      case 'homedashboard':
        return <HomeDashboard/>;
      case 'login':
        return <Login/>;
      case 'register':
        return <CustomerRegister />;
      case 'contactus':
          return <Contact />;
      case 'plan':
          return <PlanServices selectedPlan={selectedPlan}/>
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar setActiveComponent={setActiveComponent} setSelectedPlan={setSelectedPlan} />
      {renderComponent()}
    </div>
  )
}

export default Home