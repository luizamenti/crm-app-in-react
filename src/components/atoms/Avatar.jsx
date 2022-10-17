import React from "react";
import "../../style/avatar.css";

export default function Avatar(props) {
  return <img src={props.src} className="image-users" alt="" />;
}
