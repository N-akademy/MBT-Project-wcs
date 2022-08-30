import React from 'react';
import Navbar from '../Components/Common/Navbar';
import Dashboard from '../Components/Other/Dashboard';
import { h2Style } from 'Styles/style';

function HomePage(): JSX.Element {
  return (
    <div>
      <Navbar />
      <h2 {...h2Style}>Dash board</h2>
      <Dashboard />
    </div>
  );
}

export default HomePage;
