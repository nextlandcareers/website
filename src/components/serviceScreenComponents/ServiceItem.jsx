import "./serviceItem.css";
import React from "react";

const ServiceItem = ({ image, heading, description, isEven }) => {
  return (
    <>
    <div
      className={`serviceItem__serviceContentContainer ${isEven ? "" : "serviceItem__contentToRight"}`}
    >
      <div className="serviceItem__serviceItemsContainer">
        <div
          className={`plus-jakarta ${
            isEven
              ? "serviceItem__itemsLinearGradientContainer"
              : "serviceItem__itemsLinearGradientContainer_even"
          }`}
        >
          <div
            className={`${isEven ? "serviceItem__itemsContainer" : "serviceItem__itemsContainer_even"}`}
          >
            {isEven ? (
              <>
                <div className="serviceItem__serviceTextContainer">
                  <div className="serviceItem__serviceHeaderContainer">{heading}</div>
                  <div className="serviceItem__ServiceDescriptionContainer">
                    {description}
                  </div>
                </div>
                <div className="serviceItem__serviceImageContainer">
                  <img src={image} alt="service_image" className="serviceItem__itemImage" />
                  <div className="serviceItem__imageGradient"></div>
                </div>
              </>
            ) : (
              <>
                <div className="serviceItem__serviceImageContainer">
                  <img src={image} alt="service_image" className="serviceItem__itemImage" />
                  <div className="serviceItem__imageGradient"></div>
                </div>
                <div className="serviceItem__serviceTextContainer">
                  <div className="serviceItem__serviceHeaderContainer">{heading}</div>
                  <div className="serviceItem__ServiceDescriptionContainer">
                    {description}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>

    <div className="serviceItem__serviceContentContainer_small_screen">
      <div className="serviceItem__serviceImageContainer_small_screen">
        <img src={image} alt="service_image_small_screen" className="serviceItem__itemImage_small_screen" />
        <div className="serviceItem__imageGradient"></div>
      </div>
      <div className="plus-jakarta serviceItem__serviceHeaderContainer_small_screen">{heading}</div>
      <div className="plus-jakarta serviceItem__ServiceDescriptionContainer_small_screen">{description}</div>
    </div>
    </>
  );
};

export default ServiceItem;
