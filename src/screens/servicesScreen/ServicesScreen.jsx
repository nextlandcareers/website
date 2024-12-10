import ServiceItem from "../../components/serviceScreenComponents/ServiceItem";
import "./serviceScreen.css";
import ServiceImage1 from "../../assets/serviceScreenImage1.jpeg";
import ServiceImage2 from "../../assets/serviceScreenImage2.jpeg";
import ServiceImage3 from "../../assets/serviceScreenImage3.jpeg";
import ServiceImage4 from "../../assets/serviceScreenImage4.jpeg";
import ServiceImage5 from "../../assets/serviceScreenImage5.jpeg";
import ServiceImage6 from "../../assets/serviceScreenImage6.jpeg";
import { useTranslation } from "react-i18next";

const ServicesScreen = () => {
  const { t } = useTranslation();

  const items = [
    {
      image: ServiceImage1,
      heading: t("serviceHeader1"),
      description: t("serviceDesc1"),
    },
    {
      image: ServiceImage2,
      heading: t("serviceHeader2"),
      description: t("serviceDesc2"),
    },
    {
      image: ServiceImage3,
      heading: t("serviceHeader3"),
      description: t("serviceDesc3"),
    },
    {
      image: ServiceImage4,
      heading: t("serviceHeader4"),
      description: t("serviceDesc4"),
    },
    {
      image: ServiceImage5,
      heading: t("serviceHeader5"),
      description: t("serviceDesc5"),
    },
    {
      image: ServiceImage6,
      heading: t("serviceHeader6"),
      description: t("serviceDesc6"),
    },
  ];
  return (
    <div className="serviceScreen__servicesMainContainer">
      <div className="serviceScreeen__header">Services we offer</div>
      <div className="serviceScreen__topLinearGradientContainer"></div>
      {items.map((item, index) => (
        <ServiceItem
          key={index}
          image={item.image}
          heading={item.heading}
          description={item.description}
          isEven={(index + 1) % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default ServicesScreen;
