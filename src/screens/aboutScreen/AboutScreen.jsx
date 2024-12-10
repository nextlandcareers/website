import "./aboutScreen.css";
import AboutImage1 from "../../assets/aboutUs_image01.png";
import AboutImage2 from "../../assets/mainAboutImage(2).png";
import AboutImage3 from "../../assets/mainAboutImage(3).png";
import AboutImage4 from "../../assets/mainAboutImage4.png";
import AboutItem from "../../components/aboutScreenComponents/aboutItems/AboutItem";
import { useTranslation } from "react-i18next";

const AboutScreen = () => {
  const { t } = useTranslation();

  const items = [
    {
      image: AboutImage1,
      header: t("aboutHeader1"),
      description: [t("aboutDesc11"), t("aboutDesc12"), t("aboutDesc13")],
    },
    {
      image: AboutImage4,
      header: t("aboutHeader2"),
      description: [t("aboutDesc21"), t("aboutDesc22"), t("aboutDesc23")],
    },
    {
      image: AboutImage2,
      header: t("aboutHeader3"),
      description: [t("aboutDesc31"), t("aboutDesc32")],
    },
    {
      image: AboutImage3,
      header: t("aboutHeader4"),
      description: [t("aboutDesc41"), t("aboutDesc42"), t("aboutDesc43")],
    },
  ];
  return (
    <div className="aboutMainContainer">
      <div className="aboutMainImageContainer">
        <div className="aboutGradientContainer mainImageTopLinearGradient"></div>
        <div className="aboutGradientContainer mainImageRadialGradient"></div>
      </div>
      <div className="aboutScreen__ItemsConatiner">
        {items.map((item, index) => (
          <AboutItem
            key={index}
            image={item.image}
            header={item.header}
            description={item.description}
            isEven={(index + 1) % 2 === 0}
          />
        ))}
      </div>

      <div className="aboutScreen__QuoteContainer plus-jakarta">
        <div className="aboutScreen__quote">
          If <span className="aboutScreen__boldText">opportunity</span> doesn't{" "}
          <span className="aboutScreen__italicText">knock</span>, build a{" "}
          <span className="aboutScreen__italicText">door</span>.
        </div>
        <div className="aboutScreen__author">
          Milton <span className="aboutScreen__boldText">Berle</span>
        </div>
      </div>

      <div className="aboutScreen__QuoteContainer_small_screen plus-jakarta">
        <div>
          If{" "}
          <span className="aboutScreen__boldText_small_screen">
            opportunity
          </span>
        </div>
        <div>
          doesn't{" "}
          <span className="aboutScreen__italicText_small_screen">knock</span>,
        </div>
        <div>
          build a{" "}
          <span className="aboutScreen__italicText_small_screen">door</span>.
        </div>
        <div className="aboutScreen__author_small_screen">
          Milton{" "}
          <span className="aboutScreen__boldText_small_screen">Berle</span>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
