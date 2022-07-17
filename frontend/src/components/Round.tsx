import React from "react";
import "../style/Round.scss";

interface Props {
  children?: React.ReactNode;
}

const Round: React.FC<Props> = ({ children }) => {
  return <div className="round">{children}</div>;
};

export default Round;
