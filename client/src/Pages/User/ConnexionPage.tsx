import LoginForm from '../../Components/Common/LoginForm';
import logo from '../../Statics/Capture52.svg';
import { h2Style, pageWrapper } from '../../Styles/style';

function ConnexionPage(): JSX.Element {
  return (
    <div {...pageWrapper}>
      <h2 {...h2Style}>Hello !</h2>
      <img alt="mtbIMG" src={logo} className="logo"></img>
      <p>{'{NB}'} actually registered</p> {/*oc replace {NB} with a real var*/}
      <LoginForm />
    </div>
  );
}

export default ConnexionPage;
