import React, { useState, memo } from 'react';
import { FiCopy } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const DisplayPassword = memo(() => {
  const { password } = useSelector((store) => store.password);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div
      className="mb-4 flex  cursor-pointer items-center justify-between gap-4 bg-lightGray py-4"
      onClick={() => copyToClipboard()}
    >
      <p className="break-all text-4xl text-white">{password}</p>
      <div className="text-3xl text-limeGreen transition-colors duration-150 ease-in hover:text-white">
        <FiCopy />
      </div>
    </div>
  );
});

export default DisplayPassword;
