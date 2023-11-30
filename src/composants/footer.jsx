import '../style/footer.scss';
import logofooter from '../images/logofooter.png';

const Footer = () => {

  return (
    <div className="Footer">
      <img src={logofooter} className="logofooter" alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;