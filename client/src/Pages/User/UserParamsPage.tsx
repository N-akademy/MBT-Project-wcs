import React from 'react';
import Navbar from '../../Components/Common/Navbar';
import { useMe } from '../../Hooks/Query/useMe';
import { buttonStyle } from '../../Styles/style';

function UserParamsPage(): JSX.Element {
  const id = '7';
  const data = useMe(id);

  if (!data) {
    return <p>Error in fetching your informations</p>;
  }
  return (
    <div>
      <Navbar />
      <div>
        <h3>My infos</h3>
        <p>Name: {data.name}</p>
        <p>Email:</p>
        <p>Role: </p>
        <p>Seniority ? like now() - inscriptionDate()</p>
        <p>Profile Pic: </p>
      </div>
      <button {...buttonStyle}>Change Name</button>
      <button {...buttonStyle}>Change Email</button>
      <button {...buttonStyle}>Change Password</button>
      <button {...buttonStyle}>Change or Add a profile picture</button>
      <button
        type="button"
        onClick={() => {
          // remove token from cookies (on setting him to negavite expiration it will desappear)
          // and redirect to login page
        }}
        {...buttonStyle}
      >
        Log Out !
      </button>
    </div>
  );
}

export default UserParamsPage;
