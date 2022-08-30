import { gql, useQuery } from '@apollo/client';
import ITicket from '../../Interfaces/ITicket';

export const GET_TICKET_BY_ID = gql`
  query Query($getTicketByIdId: ID) {
    getTicketById(id: $getTicketByIdId) {
      id
      title
      description
      estimated_time
      spent_time
      status
      labels
      priority
      difficulty
      Comments {
        id
        content
        published_at
        Users {
          id
          name
        }
      }
    }
  }
`;

export const useGetTicketById = (id: String): ITicket | null => {
  const { loading, error, data } = useQuery(GET_TICKET_BY_ID, {
    variables: { getTicketByIdId: id },
  });
  if (loading) {
    return null;
  } else if (error) {
    console.log(error);
    return null;
  }
  return data?.getTicketById;
};
