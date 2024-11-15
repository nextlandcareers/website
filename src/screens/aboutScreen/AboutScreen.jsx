import "./aboutScreen.css";
import AboutImage1 from "../../assets/aboutUs_image01.png";
import AboutImage2 from "../../assets/mainAboutImage(2).png";
import AboutImage3 from "../../assets/mainAboutImage(3).png";
import AboutImage4 from "../../assets/mainAboutImage4.png";
import AboutItem from "../../components/aboutScreenComponents/aboutItems/AboutItem";

const AboutScreen = () => {
  const items = [
    {
      image: AboutImage1,
      header: "Who we are",
      description: [
        "Having worked closely with multiple companies in Europe for several years, our directors at Nextland Careers have identified a huge gap, the challenge companies across various sectors face when having to find skilled workers. Powered by this purpose, our directors set out to close that gap and started Nextland Careers.",
        "In the current European market, there is a notable shortage of skilled workers, which amplifies the importance of our mission. We are here to train the best of professionals and turn their careers to greater heights. Everything in Nextland Careers is all about making sure no matter where you come from or how much experience you have,  we are designed to equip individuals with the expertise and confidence needed to thrive within the top companies in Europe.",
        "Our company is not just shaping careers, but also bringing talent and connecting them to opportunity.",
      ],
    },
    {
      image: AboutImage4,
      header: "What makes us  different ?",
      description: [
        "We at Nextland Careers don't just do regular hiring. Our strategy guarantees that applicants receive thorough, ongoing assistance through our offices located in europe and india. Our goal is to make relocating overseas easier for companies and individuals by providing a range of services tailored to their requirements.",
        "We provide accommodation assistance, travel assistance, language training, transportation solutions and healthcare assistance. We are committed to handle all the challenges that the candidates may face in their new country, ensuring they feel supported every step of the way.",
        "Additionally, we address language barriers and coordination issues to ensure effective communication and integration within the workplace. Our focus is on hiring top-quality employees and maintaining a high standard of satisfaction for our client companies. If a company is not satisfied with an employee, we promptly and efficiently replace them, ensuring minimal disruption.",
      ],
    },
    {
      image: AboutImage2,
      header: "Our mission",
      description: [
        "At Nextland Careers, our goal is to link exceptional talent with outstanding career opportunities throughout Europe. We strive to bridge the gap between skilled professionals and premier employers, driving success and growth for both job seekers and businesses. Leveraging our extensive network of reliable partner companies, we deliver customized recruitment solutions that address the unique demands of the European job market.",
        "We are committed to upholding the highest standards of excellence, integrity, and innovation, ensuring that we provide top-tier manpower solutions that enable individuals and organizations to reach their highest potential.",
      ],
    },
    {
      image: AboutImage3,
      header: "Our vision",
      description: [
        "Our vision is to redefine the recruitment experience across Europe. We aim to be the go-to destination for both job seekers and employers, known for our unparalleled ability to match talent with opportunity.",
        "By embracing innovative technologies and fostering deep, collaborative partnerships, we strive to set new standards in the recruitment industry. Our goal is to inspire and empower individuals to reach their career potential while enabling businesses to thrive with the best talent.",
        "We are committed to build a future where Nextland Careers is synonymous with trust, excellence, and transformative success in the European employment landscape.",
      ],
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
