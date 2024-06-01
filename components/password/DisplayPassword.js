import React, {useState, memo, useMemo} from 'react';
import {FiCopy} from 'react-icons/fi';
import {useSelector} from 'react-redux';

const DisplayPassword = () => {
  const [isCopied, setCopied] = useState(false);
  const password = useSelector((store) => store.password.password);
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000); // Reset isCopied after 2 seconds
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div
      className="mb-4 flex  cursor-pointer items-center justify-between gap-4 bg-lightGray py-4"
      onClick={() => copyToClipboard()}
    >
      <p
        className="break-all text-4xl text-white"
        data-testid="password-display"
      >
        {password}
      </p>
      <div className="flex items-center gap-5 text-3xl  text-limeGreen transition-colors duration-150 ease-in hover:text-white">
        {isCopied ? <p className="text-2xl transition-all duration-100">Copied</p> : ''}
        <FiCopy />
      </div>
    </div>
  );
};

export default DisplayPassword;
