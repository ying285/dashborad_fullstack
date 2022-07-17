import React from "react";
import "../style/Button.scss";

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className="btn1" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
