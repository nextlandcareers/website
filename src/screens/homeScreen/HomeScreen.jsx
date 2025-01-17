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
import { useTranslation } from "react-i18next";

const HomeScreen = () => {
  const { t } = useTranslation();

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
    { image: Service1, text: t("service1") },
    { image: Service2, text: t("service2") },
    { image: Service3, text: t("service3") },
    { image: Service4, text: t("service4") },
    { image: Service5, text: t("service5") },
  ];

  const ratingItems = [
    {
      // image: Rating1,
      profileName: "Arun Alex",
      // profileDescription: "Lorem ipsum dolor sit amet",
      ratingDescription: t("rating1"),
      ratingValue: 4.5,
    },
    {
      // image: Rating2,
      profileName: "Vipin das",
      // profileDescription: "Lorem ipsum dolor sit amet",
      ratingDescription: t("rating2"),
      ratingValue: 5,
    },
    {
      // image: Rating3,
      profileName: "Joseph Abin",
      // profileDescription: "Lorem ipsum dolor sit amet",
      ratingDescription: t("rating3"),
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
            <h1 className="thinnerText">{t("welcome")}</h1>
            <h1 className="bolderText">{t("head2")}</h1>
            <div className="gradientContainer">
              <h1 className="bolderText">{t("head3")}</h1>
              <div className="gradient">
                <h1 className="bolderText">{t("head4")}</h1>
              </div>
            </div>
          </div>
          <div className="subTextContainer plus-jakarta">
            <div className="subSubTextContainer">
              <div className="mainSubText">{t("subHead1")}</div>
              <div>{t("subHead2")}</div>
            </div>
            <div>{t("subHead3")}</div>
          </div>
        </div>
      </div>

      {/* Sector */}
      <div className="setcorTextContainer">
        <div className="topText plus-jakarta">{t("top")}</div>
        <div className="sectorText plus-jakarta">{t("sector")}</div>
      </div>

      <div className="sectorContainer mb-12">
        <Sector image={Sector1} text={t("sector1")} />
        <Sector image={Sector2} text={t("sector2")} />
        <Sector image={Sector3} text={t("sector3")} />
      </div>

      <div className="sectorContainer mb-24">
        <Sector image={Sector4} text={t("sector4")} />
        <Sector image={Sector5} text={t("sector5")} />
        <Sector image={Sector6} text={t("sector6")} />
      </div>

      {/* Contact */}
      <div className="contactImgContainer">
        <img src={ContactImg} alt="Contact_img" />
        <div className="gradientOverlayContact"></div>
        <div className="contactTextContainer">
          <div className="contactText">
            <div className="plus-jakarta ">{t("contact1")}</div>
            <div className="plus-jakarta ">{t("contact2")}</div>
          </div>

          <Link to="/contact">
            <Button title={t("contactUS")} />
          </Link>
        </div>
      </div>

      {/* Services */}
      <div className="setcorTextContainer">
        <div className="topText plus-jakarta">{t("our")}</div>
        <div className="sectorText plus-jakarta">{t("service")}</div>
      </div>

      <div className="servicesContainer">
        {serviceItems.map((item, index) => (
          <Service key={index} image={item.image} text={item.text} />
        ))}
      </div>

      {/* Trusted By */}
      <div className="trustedTextContainer">
        <div className="trustedTopText plus-jakarta">{t("trustedBy")}</div>
        <div className="trustedSubText plus-jakarta">{t("manyCompanies")}</div>
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
