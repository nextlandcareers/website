import "./button.css"

const Button = ({title}) => { 
  return (
    <div className="contactButtonContainer">
      <h1 className="contactButton">{title}</h1>
    </div>
  );
};

export default Button;
