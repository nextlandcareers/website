import "./contactScreen.css";
import ContactMainImage from "../../assets/conatctUsMain (1).jpg";
import Phone from "../../assets/phoneIcon.png";
import Mail from "../../assets/mailIcon.png";
import Question from "../../components/conatctUsScreenComponents/question/Question";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

const ContactScreen = () => {
  const { t } = useTranslation();

  const handleLetsTalkButtonClick = () => {
    const mailtoLink = "mailto:contact@nextlandcareers.com";
    window.open(mailtoLink, "_blank");
  };

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31464.74379900874!2d76.52490841417325!3d9.673096954949061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d37b3d578d7d%3A0xeaff56dafc9d877d!2sEttumanoor%2C%20Kerala!5e0!3m2!1sen!2sin!4v1720594283637!5m2!1sen!2sin";

  const renderMap = useCallback(() => {
    return (
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: "0", borderRadius: "25px" }}
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
                  <div className="item_heading_Conatinar">Contact</div>
                  <div className="contacts_container">
                    <div className="emailContainer">
                      <img src={Phone} alt="phone_icon" className="mail_Img" />
                      <div className="contactScreen__number__container">
                        <div>+91 88486 06589</div>
                        <div>+91 89219 03274</div>
                      </div>
                    </div>
                    <div className="emailContainer">
                      <img src={Mail} alt="main_icon" className="mail_Img" />
                      <div>contact@nextlandcareers.com</div>
                    </div>
                  </div>
                </div>
                <div className="address_container">
                  <div className="item_heading_Conatinar">Address</div>
                  <div className="item_descr_container">
                    <div>NEXTLAND CAREERS</div>
                    <div>
                      VI/542-B,Second Floor, Focus Tower, Parolickal Junction,
                    </div>
                    <div>Athirampuzha PO, Ettumanoor</div>
                    <div>Kottayam, Kerala-686562, India</div>
                  </div>
                </div>
                <div className="map_container">{renderMap()}</div>
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
              <div>Have more questions?</div>
              <div>Let's talk</div>
            </div>

            <div
              onClick={handleLetsTalkButtonClick}
              className="lets_talk_button_container"
            >
              <img src={Mail} alt="mail_icon" className="mail_icon_image" />
              <div className="button_text">Write to us</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactScreen;
