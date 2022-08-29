import React, { useState } from 'react';
import Navbar from '../../Components/Common/Navbar';
import FilterBar from '../../Components/Common/FilterBar';
import FilteredTicketList from '../../Components/Ticket/FilteredTicketList';
import { h2Style, pageWrapper } from '../../Styles/style';
import IFilter from 'Interfaces/IFilter';
import { useNavigate } from 'react-router-dom';

function TicketListPage(): JSX.Element {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<IFilter>({
    project: 1,
    user: 1,
  });

  function handleFiltersValue(newFilters: IFilter): void {
    setFilters({ ...newFilters });
  }

  return (
    <div {...pageWrapper}>
      <Navbar />
      <h2 {...h2Style}>Your Tickets</h2>
      <button onClick={() => navigate('/ticketCreation', { replace: true })}>
        New Ticket +
      </button>
      <FilterBar setFilterValue={handleFiltersValue} actualValues={filters} />
      <FilteredTicketList filters={filters} />;
    </div>
  );
}

export default TicketListPage;
