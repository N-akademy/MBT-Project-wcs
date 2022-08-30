import React from 'react';
import ITicket from 'Interfaces/ITicket';
import TicketItem from './TicketItem';
import { useFilterTicket } from '../../Hooks/Query/useFilterTicket';
import { ticketListContainer } from '../../Styles/style';
import IFilter from '../../Interfaces/IFilter';

interface IProps {
  filters: IFilter;
}

function FilteredTicketList({ filters }: IProps): JSX.Element {
  const tickets: ITicket[] | null = useFilterTicket(
    filters.project,
    filters.user
  );

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

export default FilteredTicketList;
