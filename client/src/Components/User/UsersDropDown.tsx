import React from 'react';
import { useGetUsers } from '../../Hooks/Query/useGetUser';
import {
  inputContainerStyle,
  labelStyle,
  inputStyle,
} from '../../Styles/style';

interface IProps {
  callback: Function;
}

function UsersDropDown({ callback }: IProps): JSX.Element {
  const data = useGetUsers();

  if (!data || data.length === 0) {
    return <p>No Users in DB :/</p>;
  }

  return (
    <div {...inputContainerStyle}>
      <label htmlFor="users" {...labelStyle}>
        Select Members
      </label>
      <select
        id="users"
        onChange={(e: any) => callback(e.target.value)}
        {...inputStyle}
      >
        {data.map((user: any) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UsersDropDown;
