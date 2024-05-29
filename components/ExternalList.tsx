"use client";

import React from "react";
import ExternalClip from "./ExternalClip";

import type { ExternalItemDefinition } from "./ExternalClip";

interface ExternaListProps {
  items: ExternalItemDefinition[];
}

function ExternalList(props: ExternaListProps) {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-10">
      {props.items.map((item) => (
        <ExternalClip item={item} key={item.id} />
      ))}
    </div>
  );
}

export default ExternalList;
