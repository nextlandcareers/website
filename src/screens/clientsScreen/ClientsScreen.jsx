import "./clientScreen.css";
import ClientDetails from "../../components/clientScreenComponents/clientDetails/ClientDetails";
import ClientLogo2 from "../../assets/Hoffmeier_Logo_Hompagec 1.png";
import ClientLogo3 from "../../assets/wibbelt_logo 1.png";
import ClientLogo4 from "../../assets/rom.png";
import ClientLogo5 from "../../assets/trusted(4.1.1).png";
import ClientLogo6 from "../../assets/trusted(5.1).png";
import ClientLogo7 from "../../assets/trusted(6.1).png";
import ClientLogo8 from "../../assets/trusted (7.1).png";
import ClientLogo9 from "../../assets/trusted (8.1).png";
import { useTranslation } from "react-i18next";

const ClientsScreen = () => {
  const { t } = useTranslation();

  const clients = [
    {
      image: ClientLogo4,
      header: "ROM",
      description: t("clientDesc1"),
      style: {
        height: "63px",
      },
    },
    {
      image: ClientLogo2,
      header: "HOFFMEIER",
      description: t("clientDesc2"),
      style: {
        height: "48px",
      },
    },
    {
      image: ClientLogo3,
      header: "Wibbelt",
      description: t("clientDesc3"),
      style: {
        height: "46px",
      },
    },
    {
      image: ClientLogo5,
      header: "YOUNCHANG",
      description: t("clientDesc4"),
      style: {
        height: "37px",
      },
    },
    {
      image: ClientLogo6,
      header: "ISM",
      description: t("clientDesc5"),
      style: {
        height: "32px",
      },
    },
    {
      image: ClientLogo7,
      header: "MSB",
      description: t("clientDesc6"),
      style: {
        height: "90px",
      },
    },
    {
      image: ClientLogo9,
      header: "Formenza Kft.",
      description: t("clientDesc7"),
      style: {
        height: "66px",
      },
    },
    {
      image: ClientLogo8,
      header: "Miczo Kft.",
      description: t("clientDesc8"),
      style: {
        height: "90px",
      },
    },
  ];
  return (
    <>
      <div className="clientScreen__main__container">
        <div className="clientScreen__liner__gradient__toBottom"></div>
        <div className="clientScreen__radial__gradient__container"></div>
        <div className="clientScreen__liner__gradient__toRight"></div>

        <div className="clientScreen__items__container plus-jakarta">
          <div className="clientScreen__header">{t("clientHead")}</div>

          <div className="clientScreen__clients__container">
            {clients.map((client, index) => (
              <ClientDetails
                key={index}
                image={client.image}
                header={client.header}
                description={client.description}
                style={client.style}
              />
            ))}
          </div>

          {/* <div className="clientScreen__nextIcon">
            <img
              src={NextIcon}
              alt="next_icon"
              className="clientScreen__next__icon"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ClientsScreen;
