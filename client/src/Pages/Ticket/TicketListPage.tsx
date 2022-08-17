import React, { useState } from 'react';
import Navbar from '../../Components/Common/Navbar';
import FilterBar from '../../Components/Common/FilterBar';
import TicketList from '../../Components/Ticket/TicketList';
import { useGetUserTickets } from '../../Hooks/Query/useGetUserTickets';
import { useGetTicketByProject } from '../../Hooks/Query/useTicketByProject';
import ITicket from '../../Interfaces/ITicket';
import { h2Style, pageWrapper } from '../../Styles/style';

function TicketListPage(): JSX.Element {
  const tickets: ITicket[] | null = useGetUserTickets('7'); //TODO: change the hard coded user id
  const filteredTickets: ITicket[] | null = useGetTicketByProject(4);

  const [filtered, setFiltered] = useState(false);

  return (
    <div {...pageWrapper}>
      <Navbar />
      <h2 {...h2Style}>Your Tickets</h2>
      <FilterBar />
      <TicketList tickets={filtered ? filteredTickets : tickets} />
    </div>
  );
}

export default TicketListPage;
