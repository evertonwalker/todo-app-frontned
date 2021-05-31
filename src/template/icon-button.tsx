import React from "react";

interface IconButtonInterface {
  icon: string;
  styleButton: string;
  hide: boolean;
  onClick?: () => any;
}

const IconButton = (props: IconButtonInterface) => {
  if (props.hide) {
    return null;
  } else {
    return (
      <button
        className={"btn btn-" + props.styleButton}
        onClick={props.onClick}
      >
        <i className={"fa fa-" + props.icon}></i>
      </button>
    );
  }
};

export default IconButton;
