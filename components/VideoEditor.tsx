"use client";
import "./index.css";
import React, { useCallback, useEffect, useState } from "react";
import { endOfDay, startOfDay } from "date-fns";
import type { DragEndEvent, ResizeEndEvent, Timeframe } from "dnd-timeline";
import { TimelineContext } from "dnd-timeline";
import Timeline from "./TimeLine";
import ExternalList from "./ExternalList";

import {
  ItemType,
  generateExternalItems,
  generateItems,
  generateRows,
} from "@/utils";

const DEFAULT_TIMEFRAME: Timeframe = {
  start: startOfDay(new Date()),
  end: endOfDay(new Date()),
};

function VideoEditor() {
  const [timeframe, setTimeframe] = useState(DEFAULT_TIMEFRAME);

  const [rows, setRows] = useState(generateRows(2));
  const [items, setItems] = useState(generateItems(3, timeframe, rows));
  const [externalItems, setExternalItems] = useState(
    generateExternalItems(3, timeframe, rows)
  );

  const onResizeEnd = useCallback(
    (event: ResizeEndEvent) => {
      const updatedRelevance =
        event.active.data.current.getRelevanceFromResizeEvent?.(event);

      if (!updatedRelevance) return;

      const activeItemId = event.active.id;

      setItems((prev) =>
        prev.map((item) => {
          if (item.id !== activeItemId) return item;

          return {
            ...item,
            relevance: updatedRelevance,
          };
        })
      );
    },
    [setItems]
  );

  const onDragEnd = useCallback(
    (event: DragEndEvent) => {
      const activeRowId = event.over?.id as string;
      const updatedRelevance =
        event.active.data.current.getRelevanceFromDragEvent?.(event);

      if (!updatedRelevance || !activeRowId) return;

      const activeItemId = event.active.id.toString();
      const activeItemType = event.active.data.current?.type as ItemType;

      if (activeItemType === ItemType.ListItem) {
        setItems((prev) =>
          prev.map((item) => {
            if (item.id !== activeItemId) return item;

            return {
              ...item,
              rowId: activeRowId,
              relevance: updatedRelevance,
            };
          })
        );
      } else if (activeItemType === ItemType.ExternalItem) {
        setItems((prev) => [
          ...prev,
          {
            id: activeItemId,
            rowId: activeRowId,
            relevance: updatedRelevance,
          },
        ]);
        setExternalItems((prev) =>
          prev.filter((item) => item.id !== activeItemId)
        );
      }
    },
    [setItems]
  );

  return (
    <TimelineContext
      onDragEnd={onDragEnd}
      onResizeEnd={onResizeEnd}
      onTimeframeChanged={setTimeframe}
      timeframe={timeframe}
    >
      <div className="flex w-full h-screen justify-between  bg-slate-900 text-white gap-10 p-6">
        <div className="w-1/5">
          <ExternalList items={externalItems} />
        </div>
        <div className="w-full self-end">
          <Timeline items={items} rows={rows} setRows={setRows} />
        </div>
      </div>
    </TimelineContext>
  );
}

export default VideoEditor;
