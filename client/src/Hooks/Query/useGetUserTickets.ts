import { gql, useQuery } from '@apollo/client';
import ITicket from '../../Interfaces/ITicket';

export const GET_USER_TICKETS = gql`
  query Query($getUserByIdId: ID) {
    getUserById(id: $getUserByIdId) {
      id
      Tickets {
        id
        title
        description
        status
        projectId
      }
    }
  }
`;

export const useGetUserTickets = (id: String): ITicket[] | null => {
  const { loading, error, data } = useQuery(GET_USER_TICKETS, {
    variables: { getUserByIdId: id },
  });
  if (loading) {
    return null;
  } else if (error) {
    console.log(error);
    return null;
  }
  return data?.getUserById?.Tickets;
};
