import { useEffect } from "react";
import Sector from "../../components/sector/Sector";
import Button from "../../components/button/Button";
import Service from "../../components/service/Service";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import ClientRatings from "../../components/clientRatings/ClientRatings";
import "./homeScreen.css";
import NLCmainImage from "../../assets/NLC main image-minn.jpeg";
import Sector1 from "../../assets/sector1.png";
import Sector2 from "../../assets/sector2.png";
import Sector3 from "../../assets/sector3.png";
import Sector4 from "../../assets/sector4.png";
import Sector5 from "../../assets/foodProcessing(2).jpg";
import Sector6 from "../../assets/sector6.png";
import ContactImg from "../../assets/contact.png";
import Service1 from "../../assets/service1.png";
import Service2 from "../../assets/service2.png";
import Service3 from "../../assets/service3.png";
import Service4 from "../../assets/service4.png";
import Service5 from "../../assets/service5.png";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  useEffect(() => {
    if (!sessionStorage.getItem("firstLoad")) {
      sessionStorage.setItem("firstLoad", "true");
      window.location.reload();
    }

    window.onbeforeunload = () => {
      sessionStorage.removeItem("firstLoad");
    };
  }, []);
  
  const serviceItems = [
    { image: Service1, text: "Direct Job Application" },
    { image: Service2, text: "Skill Enhancement Training" },
    { image: Service3, text: "Language Training" },
    { image: Service4, text: "Visa Assistance" },
    { image: Service5, text: "Accommodation Assistance" },
  ];

  const ratingItems = [
    {
      // image: Rating1,
      profileName: "Arun Alex",
      // profileDescription: "Lorem ipsum dolor sit amet",
      ratingDescription:
        "They are doing a wonderful job in giving such services to common man like us, our life changed completely.",
      ratingValue: 4.5,
    },
    {
      // image: Rating2,
      profileName: "Vipin das",
      // profileDescription: "Lorem ipsum dolor sit amet",
      ratingDescription:
        "Thanks to the team, long dream of work in europe got fulfilled, good service.",
      ratingValue: 5,
    },
    {
      // image: Rating3,
      profileName: "Joseph Abin",
      // profileDescription: "Lorem ipsum dolor sit amet",
      ratingDescription:
        "Throughout the entire process, i got clear guidance and support. They made the entire process seamless and stress-free. I am very grateful for their professional and efficient service, and I highly recommend to all.",
      ratingValue: 5,
    },
  ];

  return (
    <>
      <div className="image-container">
        <img src={NLCmainImage} alt="Main image" className="main-image" />
        <div className="gradient-overlay"></div>
        <div className="text-overlay">
          <div className="mainTextContainer">
            <h1 className="thinnerText">WORK IN</h1>
            <h1 className="bolderText">TOP EUROPEAN</h1>
            <div className="gradientContainer">
              <h1 className="bolderText">COMPANIES</h1>
              <div className="gradient">
                <h1 className="bolderText">VIA US</h1>
              </div>
            </div>
          </div>
          <div className="subTextContainer plus-jakarta">
            <div className="subSubTextContainer">
              <div className="mainSubText">We help you</div>
              <div>empower your</div>
            </div>
            <div>career to new heights.</div>
          </div>
        </div>
      </div>

      {/* Sector */}
      <div className="setcorTextContainer">
        <div className="topText plus-jakarta">TOP</div>
        <div className="sectorText plus-jakarta">SECTORS</div>
      </div>

      <div className="sectorContainer mb-12">
        <Sector
          image={Sector1}
          text={"Mechanical, Electrical and Automotive"}
        />
        <Sector image={Sector2} text={"Civil Construction"} />
        <Sector image={Sector3} text={"Restaurants"} />
      </div>

      <div className="sectorContainer mb-24">
        <Sector image={Sector4} text={"Manufacturing"} />
        <Sector image={Sector5} text={"Food Processing"} />
        <Sector image={Sector6} text={"Health Care"} />
      </div>

      {/* Contact */}
      <div className="contactImgContainer">
        <img src={ContactImg} alt="Contact_img" />
        <div className="gradientOverlayContact"></div>
        <div className="contactTextContainer">
          <div className="contactText">
            <div className="plus-jakarta ">Start a career abroad in</div>
            <div className="plus-jakarta ">your dream country.</div>
          </div>

          <Link to="/contact">
            <Button title={"Contact Us"} />
          </Link>
        </div>
      </div>

      {/* Services */}
      <div className="setcorTextContainer">
        <div className="topText plus-jakarta">OUR</div>
        <div className="sectorText plus-jakarta">SERVICES</div>
      </div>

      <div className="servicesContainer">
        {serviceItems.map((item, index) => (
          <Service key={index} image={item.image} text={item.text} />
        ))}
      </div>

      {/* Trusted By */}
      <div className="trustedTextContainer">
        <div className="trustedTopText plus-jakarta">TRUSTED BY</div>
        <div className="trustedSubText plus-jakarta"> MANY COMPANIES</div>
      </div>

      <div className="trustedByContainer">
        <TrustedBy />
      </div>

      {/* Clients Ratings */}
      <div className="reviewContainer">
        <ClientRatings items={ratingItems} />
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default HomeScreen;
