import React from 'react';
import { useNavigate } from 'react-router-dom';
import ITicket from '../../Interfaces/ITicket';
import { ticketItemContainer } from '../../Styles/style';

function TicketItem({ ticket }: { ticket: ITicket }): JSX.Element {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/ticketDetails/${ticket?.id}`, { replace: true });
      }}
      {...ticketItemContainer}
    >
      <p>{ticket?.title}</p>
      <p>{ticket?.description}</p>
      <p>{ticket?.status}</p>
      <p>{ticket?.projectId}</p>
    </div>
  );
}

export default TicketItem;
