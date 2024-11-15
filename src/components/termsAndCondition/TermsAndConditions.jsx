import React from "react";
import "./termsAndConditions.css";

const TermsAndConditions = ({ heading, description, number }) => {
  return (
    <div className="terms_and_conditions_description_middle_text_container">
      <div className="terms_and_conditions_description_middle_header">
        {`${number}. ${heading}`}
      </div>
      <div
        className="terms_and_conditions_description_middle_description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default TermsAndConditions;
