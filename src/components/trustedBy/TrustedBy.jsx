import "./trustedBy.css";
import Trusted1 from "../../assets/rom.png";
import Trusted2 from "../../assets/Hoffmeier_Logo_Hompagec 1.png";
import Trusted3 from "../../assets/wibbelt_logo 1.png";
import Trusted4 from "../../assets/trusted(4.1.1).png";
import Trusted5 from "../../assets/trusted(5.1).png";
import Trusted6 from "../../assets/trusted(6.1).png";
import Trusted7 from "../../assets/trusted (8.1).png";
import Trusted8 from "../../assets/trusted (7.1).png";

const TrustedBy = () => {
  return (
    <>
      <div className="trustedByFirstRow">
        <div>
          <img src={Trusted1} alt="trusted_img" className="trustedImg" />
        </div>
        <div>
          <img src={Trusted2} alt="trusted_img" className="trustedImg" style={{width: "250px"}} />
        </div>
        <div>
          <img src={Trusted3} alt="trusted_img" className="trustedImg" style={{width: "220px"}} />
        </div>
      </div>

      <div className="trustedBySecondRow">
        <div>
          <img src={Trusted4} alt="trusted_img" className="trustedImg" style={{width: "230px"}} />
        </div>
        <div>
          <img src={Trusted5} alt="trusted_img" className="trustedImg" />
        </div>
        <div>
          <img src={Trusted6} alt="trusted_img" className="trustedImg" style={{height: "60px"}} />
        </div>
        <div>
          <img src={Trusted7} alt="trusted_img" className="trustedImg" style={{height: "60px"}} />
        </div>
        <div>
          <img src={Trusted8} alt="trusted_img" className="trustedImg" style={{height: "60px"}} />
        </div>
      </div>
    </>
  );
};

export default TrustedBy;
