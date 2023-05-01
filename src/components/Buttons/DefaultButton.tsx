import React from 'react';
import { EButton } from './ExportButton';
import { Button } from '@mui/material';

function DefaultButton(props: EButton) {
  const { title, action, icon, variant, loading } = props;
  return (
    <Button
      onClick={() => action()}
      variant={variant}
      style={{ textTransform: 'none' }}
      className={`${
        variant !== 'contained' ? 'p-2 text-black' : 'bg-blue-500 p-2'
      } w-full h-fit`}
    >
      <span className="text-xl">{icon}</span>
      <span>{title}</span>
    </Button>
  );
}

export default DefaultButton;
