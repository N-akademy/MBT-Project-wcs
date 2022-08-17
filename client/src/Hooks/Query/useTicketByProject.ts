import { gql, useQuery } from '@apollo/client';
import ITicket from '../../Interfaces/ITicket';

export const GET_TICKETS_BY_PROJECT = gql`
  query GetProjectById($getProjectByIdId: ID) {
    getProjectById(id: $getProjectByIdId) {
      id
      Tickets {
        id
        title
        description
        status
      }
    }
  }
`;

export const useGetTicketByProject = (id: Number): ITicket[] | null => {
  const { loading, error, data } = useQuery(GET_TICKETS_BY_PROJECT, {
    variables: { getProjectByIdId: id },
  });
  if (loading) {
    return null;
  } else if (error) {
    console.log(error);
    return null;
  }
  return data?.getProjectById?.Tickets;
};
