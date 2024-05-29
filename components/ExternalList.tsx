"use client";

import React from "react";
import ExternalClip from "./ExternalClip";

import type { ExternalItemDefinition } from "./ExternalClip";

interface ExternaListProps {
  items: ExternalItemDefinition[];
}

function ExternalList(props: ExternaListProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {props.items.map((item) => (
        <ExternalClip item={item} key={item.id} />
      ))}
    </div>
  );
}

export default ExternalList;
