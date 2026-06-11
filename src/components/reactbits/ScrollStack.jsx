import React from "react";

export const ScrollStackItem = ({ children }) => {
  return (
    <div className="scroll-stack-card-wrapper">
      <div className="scroll-stack-card">{children}</div>
    </div>
  );
};

const ScrollStack = ({ children }) => {
  return (
    <div className="scroll-stack-scroller">
      <div className="scroll-stack-inner">
        {children}

        <div className="scroll-stack-end"></div>
      </div>
    </div>
  );
};

export default ScrollStack;
