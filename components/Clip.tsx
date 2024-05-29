import React from "react";
import type { Relevance } from "dnd-timeline";
import { useItem } from "dnd-timeline";
import { ItemType } from "@/utils";

interface ItemProps {
  id: string;
  relevance: Relevance;
  children: React.ReactNode;
}

function Clip(props: ItemProps) {
  const { setNodeRef, attributes, listeners, itemStyle, itemContentStyle } =
    useItem({
      id: props.id,
      relevance: props.relevance,
      data: {
        type: ItemType.ListItem,
      },
    });

  return (
    <div ref={setNodeRef} style={itemStyle} {...listeners} {...attributes}>
      <div style={itemContentStyle}>
        <div className="border w-full h-16 overflow-hidden">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Clip;
