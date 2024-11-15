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

const ClientsScreen = () => {
  const clients = [
    {
      image: ClientLogo4,
      header: "ROM",
      description:
        "ROM Technik is a German leader in the planning, construction and maintenance of technical building equipment. We support and optimize the entire life cycle of a building.",
      style: {
        height: "63px",
      },
    },
    {
      image: ClientLogo2,
      header: "HOFFMEIER",
      description:
        "We are your partner when it comes to planning, production and assembly of complex industrial plants. Our service is available to you for maintenance, revisions, conversions and dismantling. As a specialist and all-rounder, we offer you everything from a single source.",
      style: {
        height: "48px",
      },
    },
    {
      image: ClientLogo3,
      header: "Wibbelt",
      description:
        "Engineering, Repair & Service for Air and Flue Gas Technology Located in Eastern Münsterland, We Have Offered Quality and Expertise for More Than 40 Years. Our Engineering and Implementation Services Cover Most of the European Continent.",
      style: {
        height: "46px",
      },
    },
    {
      image: ClientLogo5,
      header: "YOUNCHANG",
      description:
        "We are a leading global industrial gases and engineering company, serving a variety of end markets such as chemicals and energy, food and beverages, electronics, healthcare, manufacturing, metals and mining.",
      style: {
        height: "37px",
      },
    },
    {
      image: ClientLogo6,
      header: "ISM",
      description:
        "ISM is your reliable partner offering any complex services for any player in the industry, be it industrial assembly work, pipe installation, the production of steel structures or their installation.",
      style: {
        height: "32px",
      },
    },
    {
      image: ClientLogo7,
      header: "MSB",
      description:
        "We are your experts in the fields of industry, railroad technology, renewable energies and automation technology. Our customers value our innovative and customized solutions, as well as the high quality and reliability of our products.",
      style: {
        height: "90px",
      },
    },
    {
      image: ClientLogo9,
      header: "Formenza Kft.",
      description:
        "Formenza Kft. is a pioneer in food manufacturing, after decades of experience in the meat industry. we are a leading  factory workforce supplier with operations in several large meat production and food packaging companies in Germany.",
      style: {
        height: "66px",
      },
    },
    {
      image: ClientLogo8,
      header: "Miczo Kft.",
      description:
        "Miczo Kft. developed into a successful European enterprise in the last years and offers Installation, Maintenance, review, repair work in building units of power plants and cement factories, installation works of existing power plants and cement factories. We are also pioneers in Fabrication and installation of steel structures.",
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
          <div className="clientScreen__header">Our Clients</div>

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
