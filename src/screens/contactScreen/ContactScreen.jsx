import "./contactScreen.css";
import ContactMainImage from "../../assets/conatctUsMain (1).jpg";
import Phone from "../../assets/phoneIcon.png";
import Mail from "../../assets/mailIcon.png";
import Question from "../../components/conatctUsScreenComponents/question/Question";
import { useCallback } from "react";

const ContactScreen = () => {
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
            <div className="headerContainer">Get in touch</div>
            <div className="subHeaderContainer">
              We'd love to hear from you! Contact us today for any inquiries or
              support
            </div>
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
        <div className="ques_header_container">Have any questions?</div>
        <div className="question_items_container">
          <div className="half_items_container">
            <Question
              question={"How does NLC help you in processing ?"}
              answer={
                "We will be coordinating the end-to-end process for you without letting you know any hassles."
              }
            />
            <Question
              question={"Does NLC provide any other trainings ?"}
              answer={
                "We provide necessary language & skill based training for our candidates."
              }
            />
            <Question
              question={"How to get a job abroad ?"}
              answer={
                "You can contact us and we will evaluate your profile and help you accordingly."
              }
            />
            <Question
              question={"Is there any initial processing fee involved ?"}
              answer={
                "We don't charge any initial processing fee from our candidates."
              }
            />
          </div>
          <div className="half_items_container">
            <Question
              question={"Can we visit the office ?"}
              answer={
                "You are welcome to visit our office during the office hours."
              }
            />
            <Question
              question={"Do we get refund if visa is not granted ?"}
              answer={
                "NLC won't be charging you any fee if visa is not granted."
              }
            />
            <Question
              question={"Do we need valid prior experience ?"}
              answer={
                "It depends upon the job openings which are present."
              }
            />
            <Question
              question={
                "Do you conduct interview drives in collaboration with the companies ?"
              }
              answer={
                "Yes, we do conduct such drives to hire talented workers as soon as we can."
              }
            />
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
