import "./ratingCard.css";
import Rating from "@mui/material/Rating";

const RatingCard = ({
  image,
  profileName,
  profileDescription,
  ratingDescription,
  ratingValue,
}) => {
  return (
    <div className="cardStyle">
      <div className="profileContainer">
        {image && <img src={image} alt="profile_img" className="profileImg" />}
        <div className="profileText plus-jakarta">
          <div className="profileName">{profileName}</div>
          <div className="profileDescription">{profileDescription}</div>
        </div>
      </div>
      <div className="plus-jakarta ratingDescription">{ratingDescription}</div>
      <div className="starContainer">
        <Rating name="half-rating" defaultValue={ratingValue} precision={0.5} readOnly />
      </div>
    </div>
  );
};

export default RatingCard;
