import "./highlights.css";

const Highlight = ({image, heading, info}) => {
  return (
    <div className="jobsScreen__heighlights">
      <div className="jobsScreen__heighlights__image">
        <img src={image} alt="highlight__img" className="highlights__img" />
      </div>
      <div className="heighlights__text">
        <div className="highlights__header">{heading}</div>
        <div className="highlights__desc">{info}</div>
      </div>
    </div>
  );
};

export default Highlight;
