import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='hyper-link'>Click here to navigate to <NavLink to='/application-status'>Application Tracking</NavLink> interface.</div>
  )
}

export default HomePage