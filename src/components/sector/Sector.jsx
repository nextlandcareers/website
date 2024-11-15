import "./sector.css";

const Sector = ({ image, text }) => {
  return (
    <div className="imageContainer">
      <img src={image} alt="sector_img" className="image" />
      <div className="gradientOverlay"></div>
      <div className="text plus-jakarta">{text}</div>
    </div>
  );
};

export default Sector;
