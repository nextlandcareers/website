import "./aboutItem.css";

const AboutItem = ({ image, header, description, isEven }) => {
  return (
    <div
      className={`aboutItem__itemContainer ${
        isEven ? "aboutItem__rightGradient" : "aboutItem__leftGradient"
      }`}
    >
      {isEven ? (
        <>
          <div className="aboutItem__imageContainer">
            <img
              src={image}
              alt="about_image"
              className="aboutItem__itemImg aboutItem__imgLeft"
            />
          </div>
          <div className="aboutItem__textContainer aboutItem__text_right plus-jakarta">
            <div className="aboutItem__headingContainer">{header}</div>
            <div className="aboutItem__descContainer">
              {description.map((desc, index) => (
                <div className="aboutItem__sub__desc_container" key={index}>
                  {desc}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="aboutItem__textContainer aboutItem__text_left plus-jakarta">
            <div className="aboutItem__headingContainer">{header}</div>
            <div className="aboutItem__descContainer">
              {description.map((desc, index) => (
                <div className="aboutItem__sub__desc_container" key={index}>
                  {desc}
                </div>
              ))}
            </div>
          </div>
          <div className="aboutItem__imageContainer">
            <img
              src={image}
              alt="about_image"
              className="aboutItem__itemImg aboutItem__imgRight"
            />
          </div>
        </>
      )}
      <div className="about_item_image_container_small_screen plus-jakarta">
        {isEven ? (
          <>
            <div className="about_item_image_small_screen">
              <img
                src={image}
                alt="about_image"
                className="image_about_small_screen"
              />
            </div>
            <div className="about_item_header_small_screen">{header}</div>
          </>
        ) : (
          <>
            <div className="about_item_header_small_screen">{header}</div>
            <div className="about_item_image_small_screen">
              <img
                src={image}
                alt="about_image"
                className="image_about_small_screen"
              />
            </div>
          </>
        )}
      </div>
      <div className="about_item_description_container_small_screen plus-jakarta">
        {description.map((desc, index) => (
          <div className="aboutItem__sub__desc_container_small_screen" key={index}>
            {desc}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutItem;
