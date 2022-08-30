import React, { useState } from 'react';
import UsersDropDown from '../User/UsersDropDown';
import ProjectDropDown from '../Project/ProjectDropDown';
import IFilter from 'Interfaces/IFilter';

interface IProps {
  setFilterValue: Function;
  actualValues: IFilter;
}

function FilterBar({ setFilterValue, actualValues }: IProps): JSX.Element {
  function setProject(newV: string): void {
    setFilterValue({
      project: parseInt(newV),
      user: actualValues.user,
    });
  }
  function setUser(newV: string): void {
    setFilterValue({
      project: actualValues.project,
      user: parseInt(newV),
    });
  }

  return (
    <div id="filters-container" className="flex w-full justify-around">
      <div id="filter1">
        <ProjectDropDown callback={setProject} />
      </div>
      <div id="filter2">
        <UsersDropDown callback={setUser} />
      </div>
    </div>
  );
}

export default FilterBar;
