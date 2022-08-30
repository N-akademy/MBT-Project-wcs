import React, { useEffect } from 'react';
import IProjet from '../../Interfaces/IProject';
import ProjectItem from './ProjectItem';
import { projectListWrapper } from '../../Styles/style';

const ProjectList = (props: IProjet[] | any): JSX.Element => {
  //add number of users and days left
  const addValue = (projArray: IProjet[]): IProjet[] => {
    for (let i = 0; i < projArray.length; i++) {
      projArray[i].numUsers = projArray[i].user_id.length;
      projArray[i].nbTicket = (projArray[i].Tickets || []).length;
      projArray[i].daysLeft = (
        (projArray[i].end_time || projArray[i].start_time).getDate() -
        projArray[i].start_time.getDate()
      ).toString();
    }
    return projArray;
  };
  useEffect(() => {
    addValue(props);
  });
  return (
    <div className="bg-slate-100 grid justify-items-center">
      {props.projects.map((project: IProjet) => (
        <ProjectItem {...project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectList;
