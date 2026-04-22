import React from 'react';
export function Separator({ className = "", ...props }) {
  return <div className={`shrink-0 bg-gray-200 h-[1px] w-full ${className}`} {...props} />
}