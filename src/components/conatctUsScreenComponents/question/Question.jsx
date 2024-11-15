import { useState } from "react";
import "./question.css";
import DropDown from "../../../assets/dropDownIcon.png";
import UpArrow from "../../../assets/upArrow.png";

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleDropDownClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="question_answer_container">
      <div className="question_container">
        <div style={{ color: showAnswer ? "gray" : "white" }}>{question}</div>
        <img
          onClick={handleDropDownClick}
          src={showAnswer ? UpArrow : DropDown}
          alt="dropDown_icon"
          className="drop_down_img"
        />
      </div>

      <div className={`answer_container ${showAnswer ? "show" : "hide"}`}>
        {answer}
      </div>
    </div>
  );
};

export default Question;
