import React from 'react';
import ITicket from 'Interfaces/ITicket';
import { h2Style } from 'Styles/style';
import Navbar from '../../Components/Common/Navbar';
import { useGetTicketById } from '../../Hooks/Query/useGetTicketById';

function TicketDetailPage(): JSX.Element {
  const ticketId = window.location.pathname.substring(15, 17);
  const details: ITicket | null = useGetTicketById(ticketId);
  return (
    <div>
      <Navbar />
      <h2 {...h2Style}>Ticket Details</h2>
      <p>{details?.title}</p>
      <p>{details?.description}</p>
      {/* <p>{details?.estimated_time.toString()}</p>
      <p>{details?.spent_time.toString()}</p> */}
      <p>{details?.status}</p>
      <p>{details?.labels}</p>
      <p>{details?.priority}</p>
      <p>{details?.difficulty}</p>
    </div>
  );
}

export default TicketDetailPage;
