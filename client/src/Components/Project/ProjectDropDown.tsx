import React from 'react';
import { useGetProject } from '../../Hooks/Query/useGetProject';
import {
  inputContainerStyle,
  labelStyle,
  inputStyle,
} from '../../Styles/style';

interface IProps {
  callback: Function;
}

function ProjectDropDown({ callback }: IProps): JSX.Element {
  const data = useGetProject();

  if (!data || data.length === 0) {
    return <p>No Project in DB :/</p>;
  }

  return (
    <div {...inputContainerStyle}>
      <label htmlFor="projects" {...labelStyle}>
        Select Project
      </label>
      <select
        id="projects"
        onChange={(e: any) => callback(e.target.value)}
        {...inputStyle}
      >
        {data.map((proj: any) => (
          <option key={proj.id} value={proj.id}>
            {proj.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProjectDropDown;
