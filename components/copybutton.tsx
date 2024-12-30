"use client"
import React, { useState } from 'react';
import { Button } from './ui/button';

export interface CopyButtonType {
textToCopy: string;
}

const CopyButton = ({textToCopy}: CopyButtonType) => {
  const [message, setMessage] = useState<string>('')
  // State to hold the text to copy

  // Function to copy text to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setMessage('Copied')
  };

  return (
    <div className='flex gap-4'>
      <Button onClick={copyToClipboard}>Copy</Button>
      <p>{message}</p>
    </div>
  );
};

export default CopyButton;
