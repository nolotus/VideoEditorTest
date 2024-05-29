import React from "react";
import type { RowDefinition } from "dnd-timeline";

interface SidebarProps {
  row: RowDefinition;
}

function Sidebar(props: SidebarProps) {
  return <div className="leading-[80px] ml-4">{`${props.row.id}`}</div>;
}

export default Sidebar;
