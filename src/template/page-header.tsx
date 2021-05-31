import React from "react";

interface PageHeaderInterface {
  name: string;
  small: string;
}

const PageHeader = (props: PageHeaderInterface) => {
  return (
    <header className="page-header">
      <h2>
        {props.name} <small>{props.small}</small>
      </h2>
    </header>
  );
};

export default PageHeader;
