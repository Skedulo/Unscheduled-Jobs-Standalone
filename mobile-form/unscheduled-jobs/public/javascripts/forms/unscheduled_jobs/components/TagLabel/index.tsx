import React from "react";

import "./styles.scss";


interface Props {
  label: string;
  className?: string;
}

const TagLabel: React.FC<Props> = ({ label, className }) => {
  return <div className={`tag-label ${className}`}>{label}</div>;
};

export default TagLabel;
