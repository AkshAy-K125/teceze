import "./testimonial.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  return (
    <>
      <div className="testimonialContainer">
        <div className="testimonialMarginWrapper">
          <div className="testimonialContentHeader">
            <p>TESTIMONIAL</p>
            <p>Customer is our top priority</p>
            <p>
              We servuey all of our clients, the results of which directly go to
              our CEO
            </p>
          </div>
          <div
            className="testimonialContentContainer"
            style={{ display: "flex", alignItems: "center" }}
          >
            <button>
              <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            </button>
            <div className="testimonialContentCarasoul">
              <div style={{ width: "30vw" }}>
                <p>Gymstory</p>
                <p>
                  Kronix is the best digital Agency that I have Ever Seen!
                  Highly Recommended{" "}
                </p>
                <p>
                  I recently Hired Idepeol for a custome web development and
                  couldn't be happier with the results. The team was able to
                  bring my unique ideas to life and create a website that truely
                  stands out.
                </p>
                <p>Diana Loreasia</p>
                <p>Director of Gymstory</p>
              </div>
              <div>
                <img
                  style={{ width: "175px" }}
                  src="https://avatars.githubusercontent.com/u/67403372?v=4"
                  alt=""
                />
              </div>
            </div>
            <button>
              <FontAwesomeIcon icon={faArrowRight} size="2x" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
