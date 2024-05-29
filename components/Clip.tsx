import React from "react";
import type { Relevance } from "dnd-timeline";
import { useItem } from "dnd-timeline";
import { ItemType } from "@/utils";
import clsx from "clsx";

interface ItemProps {
  id: string;
  relevance: Relevance;
  children: React.ReactNode;
  isSelected: Boolean;
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
  const src = `https://picsum.photos/seed/${props.id}/45/80`;
  function createArrayWithSrc(n: number) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push({ src });
    }
    return arr;
  }

  const imageArray = createArrayWithSrc(
    Math.abs((itemStyle?.width as number) / 45)
  );
  return (
    <div ref={setNodeRef} style={itemStyle} {...listeners} {...attributes}>
      <div style={itemContentStyle}>
        <div
          className={clsx(
            props.isSelected ? "border-blue-500" : "border-blue-100",
            "border w-full h-[80px] overflow-hidden "
          )}
        >
          <div className="flex items-center">
            {imageArray.map((image) => {
              return (
                <img src={image.src} alt="" className="pointer-events-none" />
              );
            })}
          </div>

          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Clip;
