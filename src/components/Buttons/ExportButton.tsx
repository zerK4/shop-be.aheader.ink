import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

export interface EButton {
  active?: boolean;
  title?: string;
  action?: any;
  icon?: any;
}

function ExportButton(props: EButton) {
  const { title, action } = props;
  return (
    <button className="p-2 md:p-3 bg-black text-gray-300 shadow-md shadow-gray-400 rounded-sm flex items-center gap-1">
      <span>{title}</span>
      <AiOutlineArrowUp className="text-md" />
    </button>
  );
}

export default ExportButton;
