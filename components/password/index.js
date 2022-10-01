import DisplayPassword from './DisplayPassword';
import PickPasswordLength from './PickPasswordLength';
import PasswordFeatures from './PasswordFeatures';
import PasswordStrength from './PasswordStrength';
import { BsArrowRightShort } from 'react-icons/bs';
import { generatePassword } from '../../passwordSlice';
import { useDispatch } from 'react-redux';

const Password = () => {
  const dispatch = useDispatch();

  return (
    <div className="m-4 min-w-[320px] max-w-[500px] grow rounded-md bg-lightGray p-4">
      <DisplayPassword />
      <PickPasswordLength />
      <PasswordFeatures />
      <PasswordStrength />
      <button
        className="my-4 flex w-full items-center justify-center gap-2 border-2 border-limeGreen bg-limeGreen p-4 text-center text-2xl font-medium uppercase transition-colors duration-150 ease-in hover:bg-transparent hover:text-limeGreen"
        onClick={() => dispatch(generatePassword())}
      >
        generate
        <span className="text-3xl">
          <BsArrowRightShort />
        </span>
      </button>
    </div>
  );
};

export default Password;
