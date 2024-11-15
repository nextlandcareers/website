import "./footer.css";
import NLClogo from "../../assets/NLC logo footer.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <div
      className={`footerContainer ${
        location.pathname === "/clients" ? "mt-[-31vh]" : ""
      }`}
    >
      <div className="footerGradient">
        <div className="flex flex-col space-y-2">
          <div>
            <img src={NLClogo} alt="NLC_logo" className="w-[128px] h-[84px]" />
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <Link to="/privacy_policy">
            <div className="plus-jakarta cursor-pointer tracking-wide hover:font-semibold">
              Privacy Policy
            </div>
          </Link>

          <Link to="/terms_and_conditions">
            <div className="plus-jakarta cursor-pointer tracking-wide hover:font-semibold">
              Terms & Conditions
            </div>
          </Link>
        </div>

        <div className="footerLine"></div>

        <div className="flex flex-col space-y-4">
          <div className="plus-jakarta tracking-wide">
            <div>+91 88486 06589</div>
            <div>+91 89219 03274</div>
          </div>
          <div className="plus-jakarta tracking-wide">
            contact@nextlandcareers.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
