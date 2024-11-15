import React from "react";
import "./termsAndConditionsScreen.css";
import TermsAndConditions from "../../components/termsAndCondition/TermsAndConditions";

const TermsAndConditionsScreen = () => {
  const termsAndConditons = [
    {
      heading: "Use of the Website",
      description:
        "The content of this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.  ",
    },
    {
      heading: "Intellectual Property",
      description:
        "This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited unless with express permission.",
    },
    {
      heading: "User Conduct",
      description:
        "You agree not to use this website in a way that may impair its performance, corrupt its content, or otherwise reduce its overall functionality. You also agree not to compromise the security of the website or attempt to gain access to secured areas or sensitive information.",
    },
    {
      heading: "Limitation of Liability",
      description:
        "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.<br/> Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.",
    },
    {
      heading: "External Links",
      description:
        "From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).",
    },
    {
      heading: "Changes to the Terms & Conditions",
      description:
        "Nextland Careers reserves the right to change these terms and conditions at any time. Any changes will be posted on this page, and it is your responsibility to ensure that you are aware of the current terms and conditions.",
    },
    {
      heading: "Governing Law",
      description:
        "Your use of this website and any dispute arising out of such use of the website is subject to the laws of [Your Country/State].",
    },
    {
      heading: "Contact Us",
      description:
        "If you have any questions about these Terms & Conditions, please contact us. ( Checkout contact us page )",
    },
  ];
  return (
    <div className="terms_and_conditions_main_container">
      <div className="terms_and_conditions_linerGradient_toBottom"></div>
      <div className="terms_and_conditions_radial_gradient_right_corner"></div>
      <div className="terms_and_conditions_linerGradient_toRight"></div>
      <div className="terms_and_conditions_main_text_container plus-jakarta">
        <div className="terms_and_conditions_header_container">
          Terms & Conditions
        </div>
        <div className="terms_and_conditions_description_container">
          <div className="terms_and_conditions_description_header">
            Welcome to the Nextland Careers Private Limited website. By
            accessing and using this website, you agree to comply with and be
            bound by the following terms and conditions of use, which together
            with our privacy policy govern Nextland Careers' relationship with
            you in relation to this website. If you disagree with any part of
            these terms and conditions, please do not use our website.
          </div>
          <div className="terms_and_conditions_description_middle">
            
              {termsAndConditons.map((terms, index) => (
                <TermsAndConditions
                  number={index + 1}
                  heading={terms.heading}
                  description={terms.description}
                  key={index}
                />
              ))}
          </div>
          <div className="terms_and_conditions_description_header">
            By using this website, you signify your acceptance of these terms
            and conditions. If you do not agree to these terms, please do not
            use our site. Your continued use of the site following the posting
            of changes to these terms will be deemed your acceptance of those
            changes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsScreen;
