import React from 'react';
import ITicket from 'Interfaces/ITicket';
import TicketItem from './TicketItem';
import { ticketListContainer } from '../../Styles/style';

interface IProps {
  tickets: ITicket[] | null;
}

function TicketList(props: IProps): JSX.Element {
  const { tickets } = props;
  if (!tickets || tickets?.length < 1) {
    return <p>No tickets :/</p>;
  }
  return (
    <div {...ticketListContainer}>
      {tickets.map((ticket: ITicket, i: Number) => {
        return <TicketItem key={i.toString()} ticket={ticket} />;
      })}
    </div>
  );
}

export default TicketList;
