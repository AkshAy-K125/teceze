import "./services.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch, faPenToSquare, faGlobe, faNewspaper, faEnvelope

} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <>
      <div className="serviceContainer">
        <div className='marginWrapper'>
          <div className="heading">Services</div>
          <div className="serviceTag">
            Strategic services drive digital success with tailored, comprehensive,
            approaches
          </div>
          <div className="serviceMinionsContainer">
            <div>
              <FontAwesomeIcon icon={faSearch} size="5x" />
              SEO Marketing
            </div>
            <div>
              <FontAwesomeIcon icon={faPenToSquare} size="5x" />
              content creation
            </div>
            <div>
              <FontAwesomeIcon icon={faGlobe} size="5x" />
              social media
            </div>
            <div>
              <FontAwesomeIcon icon={faNewspaper} size="5x" />
              PPC
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} size="5x" />
              Email Marketing
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
