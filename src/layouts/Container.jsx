import React from "react";

function Container({ children, customClass = "" }) {
  return <div className={`w-full mx-auto ${customClass}`}>{children}</div>;
}

export default Container;
