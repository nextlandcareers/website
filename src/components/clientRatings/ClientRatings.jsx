import "./clientRatings.css";
import NextIcon from "../../assets/ratingNext.png";
import RatingCard from "../ratingCard/RatingCard";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ClientRatings = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { t } = useTranslation()

  const itemsPerPage = 3;

  // const handleNextClick = () => {
  //   setCurrentPage(
  //     (prevPage) => (prevPage + 1) % Math.ceil(items.length / itemsPerPage)
  //   );
  // };

  const startIndex = currentPage * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="ratingsContainer">
      <div className="ratingsHeader plus-jakarta ">
        <div>{t("hereFrom")}</div>
        <div className="span">{t("happyClients")}</div>
      </div>
      <div className="ratingCardContainer">
        {currentItems.map((item, index) => (
          <RatingCard
          key={index}
            image={item.image}
            profileName={item.profileName}
            profileDescription={item.profileDescription}
            ratingDescription={item.ratingDescription}
            ratingValue={item.ratingValue}
          />
        ))}
      </div>
      {/* <div className="ratingNextIcon" onClick={handleNextClick}>
        <img src={NextIcon} alt="next_icon" className="nextImage" />
      </div> */}
    </div>
  );
};

export default ClientRatings;
