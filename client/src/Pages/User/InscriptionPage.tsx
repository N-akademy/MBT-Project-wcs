import React from 'react';
import { useNavigate } from 'react-router-dom';
import InscriptionForm from '../../Components/Common/InscriptionForm';
import { h2Style, buttonStyle, pageWrapper } from '../../Styles/style';

function InscriptionPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div {...pageWrapper}>
      <h2 {...h2Style}>Register</h2>
      <button
        type="button"
        onClick={() => navigate('/login', { replace: true })}
        {...buttonStyle}
      >
        {'<-'}
      </button>
      <InscriptionForm />
    </div>
  );
}

export default InscriptionPage;
