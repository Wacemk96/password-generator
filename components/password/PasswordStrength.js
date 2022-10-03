import React from 'react';
import { useSelector } from 'react-redux';
import generatePasswordStrengthName from '../../utils/generatePasswordStrengthName';

const PasswordStrength = () => {
  const passwordStrength = useSelector(
    (store) => store.password.passwordStrength
  );

  return (
    <section className="flex items-center justify-between bg-darkDray p-4">
      <div>
        <p className="font-bold uppercase tracking-widest text-slate-500">
          Strength
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="font-bold uppercase tracking-widest text-white">
          {generatePasswordStrengthName(passwordStrength)}
        </p>
        <div className="flex gap-1">
          <div
            className={`h-10 w-3 border-2 ${
              passwordStrength === 1
                ? 'border-red-500 bg-red-500'
                : passwordStrength === 2
                ? 'border-yellow bg-yellow'
                : passwordStrength === 3
                ? 'border-yellow bg-yellow'
                : passwordStrength === 4
                ? 'border-limeGreen bg-limeGreen'
                : 'border-white bg-transparent'
            }`}
          ></div>
          <div
            className={`h-10 w-3  border-2 ${
              passwordStrength === 2
                ? 'border-yellow bg-yellow'
                : passwordStrength === 3
                ? 'border-yellow bg-yellow'
                : passwordStrength === 4
                ? 'border-limeGreen bg-limeGreen'
                : 'border-white bg-transparent'
            }`}
          ></div>
          <div
            className={`h-10 w-3  border-2 ${
              passwordStrength === 3
                ? 'border-yellow bg-yellow'
                : passwordStrength === 4
                ? 'border-limeGreen bg-limeGreen'
                : 'border-white bg-transparent'
            }`}
          ></div>
          <div
            className={`h-10 w-3 border-2 ${
              passwordStrength === 4
                ? 'border-limeGreen bg-limeGreen'
                : 'border-white bg-transparent'
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default PasswordStrength;
