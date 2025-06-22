import React from 'react';

export default function NestedComponent({ info }: { info: string }) {
  return <span className="italic text-gray-500">{info}</span>;
}
