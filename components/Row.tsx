import React from "react";
import type { RowDefinition } from "dnd-timeline";
import { useRow } from "dnd-timeline";

interface RowProps extends RowDefinition {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

function Row(props: RowProps) {
  const {
    setNodeRef,
    setSidebarRef,
    rowWrapperStyle,
    rowStyle,
    rowSidebarStyle,
  } = useRow({ id: props.id });
  return (
    <div
      style={{ ...rowWrapperStyle, minHeight: 50 }}
      className="hover:bg-gray-500 bg-gray-700  h-[82px] first:bg-slate-900   last:bg-slate-900 border-none"
    >
      <div ref={setSidebarRef} style={rowSidebarStyle}>
        {props.sidebar}
      </div>
      <div ref={setNodeRef} style={{ ...rowStyle }}>
        {props.children}
      </div>
    </div>
  );
}

export default Row;
