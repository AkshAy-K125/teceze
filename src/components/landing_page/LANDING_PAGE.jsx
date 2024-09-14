import "./landing_page.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faQ, faCircle, faHourglass, faR} from '@fortawesome/free-solid-svg-icons';

const LANDING_PAGE = () => {
  return (
    <>
      <div className="landingPageContainer">
        <div style={{backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "50%"}} className="landingPage_contentWrapper">
          <div className="intro">
            <span className="lemon">Boost </span>
            your brand with Innovative <span className="lemon">Digital Marketing</span>
          </div>
          <div className="introtag">
            Drive engagement and Conversions with Advanced Digital Marketing
            Stratergies
          </div>
          <button className="introStartNow_button">Start Now</button>
          <div className="hrWrapper">
            <hr/>
            <span >
              Trusted by thousands of Companies
              
            </span><hr/>
            </div>
          <div className="landingMinions">
            <div><FontAwesomeIcon icon={faLayerGroup} size="2x" /> Layers</div>
            <div><FontAwesomeIcon icon={faCircle} size="2x" />Circooles</div>
            <div><FontAwesomeIcon icon={faQ} size="2x" />Quotient</div>
            <div><FontAwesomeIcon icon={faHourglass} size="2x" />Hourglass</div>
            <div><FontAwesomeIcon icon={faR} size="2x" />Command+R</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LANDING_PAGE;
