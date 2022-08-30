import React from 'react';
import Navbar from '../../Components/Common/Navbar';
import { useGetProject } from '../../Hooks/Query/useGetProject';
import ProjectList from '../../Components/Project/ProjectList';
import IProjet from '../../Interfaces/IProject';
import { pageWrapper } from '../../Styles/style';
import { useNavigate } from 'react-router-dom';

const ProjectListPage = (): JSX.Element => {
  const navigate = useNavigate();
  const projects: IProjet[] | null = useGetProject();
  return (
    <div {...pageWrapper}>
      <Navbar />
      <button type="button" onClick={() => navigate('/projetCreation')}>
        +
      </button>
      <ProjectList projects={projects || []} />
    </div>
  );
};

export default ProjectListPage;
