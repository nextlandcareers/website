import "./service.css";

const Service = ({ image, text }) => {
  return (
    <div className="subServiceContainer">
      <img src={image} alt="service_img" className="serviceImg" />
      <div className="gradientOverlay"></div>
      <div className="serviceText plus-jakarta">{text}</div>
    </div>
  );
};

export default Service;
