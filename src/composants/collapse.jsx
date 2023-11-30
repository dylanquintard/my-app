import { useState } from "react";
import '../style/collapse.scss';
import imgFleche from '../images/Vector.png';

const Collapse = ({
  title,
  content,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };
  
  return (
    <div className="Collapse">
      <button className="btnCollapse">
        {title}
        <img
          src={imgFleche}
          className={`imgCollapse ${collapsed ? "collapsed" : ""}`}
          alt="Fleche"
          onClick={handleToggle}
        />
      </button>
        <div className={`content ${collapsed ? "collapsed" : ""}`}>
          {content}
        </div>

    </div>
  );
};

export default Collapse;