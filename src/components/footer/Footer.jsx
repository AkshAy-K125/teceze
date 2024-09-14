import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="foooterContainer">
        <div className="footerWrapper">
          <div style={{ width: "200px" }}>
            <p className="lemonColor">Click It</p>
            <p>
              Click It - is a leading digital marketing agency dedicated to
              driving success for businesses online. With expertise in SEO, PPC,
              social media, content creation, and more, we offer tailored
              solutions to maximize ROI. In the USA, UK, and Canada working with
              toptier clients, from start-ups to enterprises
            </p>
          </div>
          <div>
            <p className="lemonColor">Our Services</p>
            <p>Seo Marketing</p>
            <p>Research Topic Trends</p>
            <p>Email Marketing</p>
            <p>Google PPC </p>
          </div>
          <div>
            <p className="lemonColor">Our Location</p>
            <p>USA</p>
            <p>UK</p>
            <p>Canada</p>
            <p>Virtual</p>
          </div>
          <div>
            <p className="lemonColor">Contact Us</p>
            <p>email</p>
            <p>phone</p>
            <p>social media</p>
          </div>
          <div></div>
        </div>
        <hr />
        <div className="lastWrapper">
          <p>
            <a href="#">Process</a>
            <a href="#">Benefits</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">FAQ</a>
          </p>
          <p>© 2024 RajaramanR3- All Right Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
