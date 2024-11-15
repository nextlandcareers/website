import ServiceItem from "../../components/serviceScreenComponents/ServiceItem";
import "./serviceScreen.css";
import ServiceImage1 from "../../assets/serviceScreenImage1.jpeg";
import ServiceImage2 from "../../assets/serviceScreenImage2.jpeg";
import ServiceImage3 from "../../assets/serviceScreenImage3.jpeg";
import ServiceImage4 from "../../assets/serviceScreenImage4.jpeg";
import ServiceImage5 from "../../assets/serviceScreenImage5.jpeg";
import ServiceImage6 from "../../assets/serviceScreenImage6.jpeg";

const ServicesScreen = () => {
  const items = [
    {
      image: ServiceImage1,
      heading: "Job Applications",
      description:
        "We assist job seekers in navigating the application process, ensuring their profiles stand out to potential employers and connecting them to the best employers suited for their profile and thus land  their dream job. Our team provides personalized support, from crafting compelling resumes to preparing for interviews.",
    },
    {
      image: ServiceImage2,
      heading: "Skill Enhancement Training",
      description:
        "We help you enhance your skills by the help of our specialised training programmes. Professionals may upskill and gain the latest industry standard skills and knowledge necessary to succeed in the european job market.",
    },
    {
      image: ServiceImage3,
      heading: "Language Training",
      description:
        "To help candidates in overcome language barriers, enhancing their communication skills, and increasing their employability in a varied European market, we provide extensive language training. Our classes are designed for different skill levels and are taught by knowledgeable instructors.",
    },
    {
      image: ServiceImage4,
      heading: "Visa Assistance",
      description:
        "Our professionals offer individualised advice and assistance, which streamlines and eases the visa application procedure. We keep up with the most recent immigration laws to provide fast and accurate guidance.",
    },
    {
      image: ServiceImage5,
      heading: "Onboarding & Check-in",
      description:
        "We provide a smooth transition for new hires through our standardized onboarding process, which includes orientation, paperwork and integration into their new positions and environments. Throughout the early phase of employment, our specialized team is accessible to answer any inquiries or concerns.",
    },
    {
      image: ServiceImage6,
      heading: "Accommodation Assistance",
      description:
        "Relocating for a job might be tough. We assist our applicants in finding suitable lodging, ensuring they have a pleasant and secure place to reside while they begin their new careers. Our network of housing partners offers a wide range of solutions to suit individual needs and tastes.",
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
