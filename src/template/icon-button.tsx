import React from "react";
import If from "./if";
interface IconButtonInterface {
  icon: string;
  styleButton: string;
  hide: boolean;
  onClick?: () => any;
}

const IconButton = (props: IconButtonInterface) => {
  return (
    <If test={!props.hide}>
      <button
        className={"btn btn-" + props.styleButton}
        onClick={props.onClick}
      >
        <i className={"fa fa-" + props.icon}></i>
      </button>
    </If>
  );
};

export default IconButton;
