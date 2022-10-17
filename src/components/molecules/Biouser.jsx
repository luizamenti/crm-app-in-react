import React from "react";

import Avatar from "../atoms/avatar";

export default function Biouser(props) {
  return (
    <div className="user-blog__header">
      <div className="user-blog__header-photo">
        <Avatar src={props.src} />
      </div>
      <h1 className="user-blog__header-title">{props.name}</h1>
    </div>
  );
}
