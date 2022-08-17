import React from 'react';

interface IProps {}

function FilterBar(props: IProps): JSX.Element {
  return (
    <div id="filters-container" className="flex w-full justify-around">
      <div id="filter1">
        <label htmlFor="projectDropDown">Project</label>
        <select id="projectDropDown">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div id="filter2">
        <label htmlFor="userDropDown">User</label>
        <select id="userDropDown">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
