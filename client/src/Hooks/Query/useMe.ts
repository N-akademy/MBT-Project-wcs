import { gql, useQuery } from '@apollo/client';
import IUser from '../../Interfaces/IUser';

export const GET_ME = gql`
  query GetAllUsers($getUserByIdId: ID) {
    getUserById(id: $getUserByIdId) {
      id
      name
      email
      role
      Projects {
        title
        status
      }
      Tickets {
        title
        status
      }
    }
  }
`;

export const useMe = (id: String): IUser | null => {
  const { loading, error, data } = useQuery(GET_ME, {
    variables: { getUserByIdId: id },
  });
  if (loading) {
    return null;
  } else if (error) {
    console.log(error);
    return null;
  }
  return data.getUserById;
};
