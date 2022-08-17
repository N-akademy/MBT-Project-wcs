import React from 'react';
import Navbar from '../../Components/Common/Navbar';
import TicketCreationForm from '../../Components/Ticket/TicketCreationForm';
import { pageWrapper, h2Style } from '../../Styles/style';

function TicketCreationPage(): JSX.Element {
  return (
    <div {...pageWrapper}>
      <Navbar />
      <h2 {...h2Style}>Create Task</h2>
      <TicketCreationForm />
    </div>
  );
}

export default TicketCreationPage;
