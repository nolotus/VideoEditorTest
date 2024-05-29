import React from "react";
import { useDraggable } from "@dnd-kit/core";
import type { ItemDefinition } from "dnd-timeline";
import { useTimelineContext } from "dnd-timeline";
import { ItemType } from "@/utils";

export interface ExternalItemDefinition
  extends Omit<ItemDefinition, "relevance"> {
  duration: number;
}

interface ListItemProps {
  item: ExternalItemDefinition;
}

function ExternalItem(props: ListItemProps) {
  const { getRelevanceFromDragEvent, millisecondsToPixels } =
    useTimelineContext();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.item.id,
    data: {
      type: ItemType.ExternalItem,
      duration: props.item.duration,
      getRelevanceFromDragEvent,
    },
  });

  const style = {
    ...(transform && {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    }),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="w-18 h-32 border z-10"
    >
      {props.item.id}
    </div>
  );
}

export default ExternalItem;
