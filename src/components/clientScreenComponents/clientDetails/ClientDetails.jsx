import React from "react";
import "./clientDetails.css";

const ClientDetails = ({image, header, description, style}) => {
  return (
    <div className="clientScreen__client__border_gradient">
      <div className="clientScreen__inside__gradient">
        <div className="clientScreen__client__logo">
          <img
            src={image}
            alt="client_logo"
            className="clientScreen__logo"
            style={style}
          />
        </div>
        <div className="clientScreen__client__details__seperator"></div>
        <div className="clientScreen__client__details plus-jakarta">
          <div className="clientScreen__client__header">{header}</div>
          <div className="clientScreen__client__description">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
