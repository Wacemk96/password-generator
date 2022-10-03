import { useDispatch, useSelector } from 'react-redux';
import { changePasswordLength } from '../../passwordSlice';

const PickPasswordLength = () => {
  const dispatch = useDispatch();
  const passwordLength = useSelector((store) => store.password.passwordLength);

  return (
    <section className="bg-lightGray py-4 text-white">
      <div className="flex items-center justify-between">
        <p className="text-lg">Character Length</p>
        <p className="text-4xl font-bold text-limeGreen">{passwordLength}</p>
      </div>
      <div className=" text-white">
        <input
          id="minmax-range"
          type="range"
          min={0}
          max={50}
          value={passwordLength}
          onChange={(e) => dispatch(changePasswordLength(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
        />
      </div>
    </section>
  );
};

export default PickPasswordLength;
