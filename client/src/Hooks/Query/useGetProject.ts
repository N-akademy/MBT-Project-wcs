import { gql, useQuery } from '@apollo/client';
import IProjet from '../../Interfaces/IProject';

export const GET_PROJECT = gql`
  query GetAllProjects {
    getAllProjects {
      id
      title
      description
      start_time
      end_time
      status
    }
  }
`;

export const useGetProject = (): IProjet[] | null => {
  const { loading, error, data } = useQuery(GET_PROJECT);
  if (loading) {
    return null;
  } else if (error) {
    console.log(error);
    return null;
  }
  return data.getAllProjects;
};
