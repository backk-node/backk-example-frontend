import React from 'react';

export default function preventDefaultAnd(performAction: (...args: any[]) => Promise<void>, ...args: any[]) {
  return async function (event: React.FormEvent<any>) {
    event.preventDefault();
    await performAction(...args, event);
  };
}
