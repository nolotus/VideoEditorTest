import React from "react";
import type { RowDefinition } from "dnd-timeline";

interface SidebarProps {
  row: RowDefinition;
}

function Sidebar(props: SidebarProps) {
  return <div className="border w-10">{`${props.row.id}`}</div>;
}

export default Sidebar;
