import React from "react";
import "../style/Card2.scss";

interface Props {
  children?: React.ReactNode;
}

const Card2: React.FC<Props> = ({ children }) => {
  return <div className="card2">{children}</div>;
};

export default Card2;
