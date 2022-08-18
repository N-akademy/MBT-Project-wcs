import IFilter from 'Interfaces/IFilter';
import IProjet from 'Interfaces/IProject';
import IUser from 'Interfaces/IUser';
import React from 'react';
import { useGetProject } from '../../Hooks/Query/useGetProject';
import { useGetUsers } from '../../Hooks/Query/useGetUser';

interface IProps {
  setFilterValue: Function;
  actualValues: IFilter;
}

function FilterBar({ setFilterValue, actualValues }: IProps): JSX.Element {
  const projects: IProjet[] | null = useGetProject();
  const users: IUser[] | null = useGetUsers();
  return (
    <div id="filters-container" className="flex w-full justify-around">
      <div id="filter1">
        <label htmlFor="projectDropDown">Project</label>
        <select
          id="projectDropDown"
          onChange={(e) => {
            setFilterValue({
              project: parseInt(e.target.value),
              user: actualValues.user,
            });
          }}
        >
          {projects ? (
            projects.map((proj: IProjet, i: Number) => {
              return (
                <option key={i.toString()} value={proj.id}>
                  {proj.title}
                </option>
              );
            })
          ) : (
            <p>No Project in DB :/</p>
          )}
        </select>
      </div>
      <div id="filter2">
        <label htmlFor="userDropDown">User</label>
        <select
          id="userDropDown"
          onChange={(e) => {
            setFilterValue({
              project: actualValues.project,
              user: parseInt(e.target.value),
            });
          }}
        >
          {users ? (
            users.map((user: IUser, i: Number) => {
              return (
                <option key={i.toString()} value={user.id}>
                  {user.name}
                </option>
              );
            })
          ) : (
            <p>No User in DB :/</p>
          )}
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
