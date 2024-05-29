import React from "react";

interface SubrowProps {
  children: React.ReactNode;
}

function Subrow(props: SubrowProps) {
  return (
    <div style={{ position: "relative" }} className="h-16">
      {props.children}
    </div>
  );
}

export default Subrow;
