import "./contactScreen.css";
import ContactMainImage from "../../assets/conatctUsMain (1).jpg";
import Phone from "../../assets/phoneIcon.png";
import Mail from "../../assets/mailIcon.png";
import Insta from "../../assets/insta.png";
import Fb from "../../assets/fb.png";
import Question from "../../components/conatctUsScreenComponents/question/Question";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

const ContactScreen = () => {
  const { t } = useTranslation();

  const handleLetsTalkButtonClick = () => {
    const mailtoLink = "mailto:contact@nextlandcareers.com";
    window.open(mailtoLink, "_blank");
  };

  const handleInstaClick = () => {
    window.open(
      "https://www.instagram.com/nextlandcareers?igsh=MXRhcHRhNzY4anM5bQ==",
      "_blank"
    );
  };

  const handleFbClick = () => {
    window.open(
      "https://www.facebook.com/share/1H3iC8uYhn/?mibextid=wwXIfr",
      "_blank"
    );
  };

  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/dir//Nextland+careers,+Focus+Tower,+Parolickal+Rd,+Ettumanoor,+Kerala+686562/@9.6591369,76.5449604,14.85z/data=!4m9!4m8!1m0!1m5!1m1!1s0xa0a64d5f22c5b51:0x85d07e07ee3b8e0f!2m2!1d76.5501231!2d9.658919!3e0?hl=en&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15733.0211399009!2d76.54548814282224!3d9.65921514871079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa0a64d5f22c5b51%3A0x85d07e07ee3b8e0f!2sNextland%20careers!5e0!3m2!1sen!2sin!4v1741437874397!5m2!1sen!2sin";
  const renderMap = useCallback(() => {
    return (
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: "0", borderRadius: "25px", pointerEvents: "none" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    );
  }, []);

  return (
    <>
      <div className="contactMainContainer">
        <div className="contactGradientContainer">
          <div className="heading__Container plus-jakarta">
            <div className="headerContainer">{t("contactHead")}</div>
            <div className="subHeaderContainer">{t("contactSubHead")}</div>
          </div>

          <div className="contactUs_imageContainer">
            <img
              src={ContactMainImage}
              alt="conatctUs_img"
              className="contactUs_main_img"
            />
            <div className="conatctUsImage_gradient">
              <div className="contactUs_items_container plus-jakarta">
                <div className="items_container">
                  <div className="item_heading_Conatinar">{t("conta")}</div>
                  <div className="contacts_container">
                    <div className="emailContainer">
                      <img src={Phone} alt="phone_icon" className="mail_Img" />
                      <div className="contactScreen__number__container">
                        <div>+91 75580 17771</div>
                        <div>+91 48129 60319</div>
                      </div>
                    </div>
                    <div className="emailContainer">
                      <img src={Mail} alt="main_icon" className="mail_Img" />
                      <div>contact@nextlandcareers.com</div>
                    </div>

                    <div
                      onClick={handleInstaClick}
                      className="emailContainer"
                      style={{ cursor: "pointer" }}
                    >
                      <img src={Insta} alt="main_icon" className="insta_Img" />
                      <div className="insta_txt">NEXTLAND CAREERS</div>
                    </div>

                    <div
                      onClick={handleFbClick}
                      className="emailContainer"
                      style={{ cursor: "pointer" }}
                    >
                      <img src={Fb} alt="main_icon" className="fb_Img" />
                      <div className="insta_txt">NEXTLAND CAREERS</div>
                    </div>
                  </div>
                </div>
                <div className="address_container">
                  <div className="item_heading_Conatinar">{t("address")}</div>
                  <div className="item_descr_container">
                    <div>NEXTLAND CAREERS</div>
                    <div>
                      VI/542-B,Second Floor, Focus Tower, Parolickal Junction,
                    </div>
                    <div>Athirampuzha PO, Ettumanoor</div>
                    <div>Kottayam, Kerala-686562, India</div>
                  </div>
                </div>
                <div onClick={handleMapClick} className="map_container">
                  {renderMap()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="questions_container plus-jakarta">
        <div className="ques_header_container">{t("contactQuesHead")}</div>
        <div className="question_items_container">
          <div className="half_items_container">
            <Question question={t("contactQues1")} answer={t("contactAns1")} />
            <Question question={t("contactQues2")} answer={t("contactAns2")} />
            <Question question={t("contactQues3")} answer={t("contactAns3")} />
            <Question question={t("contactQues4")} answer={t("contactAns4")} />
          </div>
          <div className="half_items_container">
            <Question question={t("contactQues5")} answer={t("contactAns5")} />
            <Question question={t("contactQues6")} answer={t("contactAns6")} />
            <Question question={t("contactQues7")} answer={t("contactAns7")} />
            <Question question={t("contactQues8")} answer={t("contactAns8")} />
          </div>
        </div>
      </div>

      <div className="lets_talk_main_container">
        <div className="lets_talk_gradient_container">
          <div className="lets_talk_container plus-jakarta">
            <div className="lets_talk_text_container">
              <div>{t("moreQues")}</div>
              <div>{t("letsTalk")}</div>
            </div>

            <div
              onClick={handleLetsTalkButtonClick}
              className="lets_talk_button_container"
            >
              <img src={Mail} alt="mail_icon" className="mail_icon_image" />
              <div className="button_text">{t("writeTo")}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactScreen;
