import React from 'react';
import { EButton } from './ExportButton';

function DefaultButton(props: EButton) {
  const { title, action, icon } = props;
  return (
    <button
      onClick={() => action()}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-3 mr-2 mb-2 focus:outline-none flex items-center gap-2"
    >
      <span className="text-xl">{icon}</span>
      <span>{title}</span>
    </button>
  );
}

export default DefaultButton;
