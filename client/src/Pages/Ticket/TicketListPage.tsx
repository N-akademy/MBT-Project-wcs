import React, { useState } from 'react';
import Navbar from '../../Components/Common/Navbar';
import FilterBar from '../../Components/Common/FilterBar';
import FilteredTicketList from '../../Components/Ticket/FilteredTicketList';
import { h2Style, pageWrapper } from '../../Styles/style';
import IFilter from 'Interfaces/IFilter';

function TicketListPage(): JSX.Element {
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
      <FilterBar setFilterValue={handleFiltersValue} actualValues={filters} />
      <FilteredTicketList filters={filters} />;
    </div>
  );
}

export default TicketListPage;
