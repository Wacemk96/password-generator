import { useDispatch, useSelector } from 'react-redux';
import {
  toggleHasLowercaseAlphabets,
  toggleHasUppercaseAlphabets,
  toggleHasNumbers,
  toggleHasSpecialCharacters,
} from '../../passwordSlice';

const PasswordFeatures = () => {
  const dispatch = useDispatch();
  const {
    hasLowercaseAlphabets,
    hasUppercaseAlphabets,
    hasNumbers,
    hasSpecialCharacters,
  } = useSelector((store) => store.password);

  return (
    <section className="bg-lightGray py-4 text-white">
      <div>
        <div className="mr-4 flex items-center">
          <input
            checked={hasUppercaseAlphabets}
            onChange={(e) => dispatch(toggleHasUppercaseAlphabets())}
            id="hasUppercase"
            type="checkbox"
            value={hasUppercaseAlphabets}
            className="h-5 w-5 cursor-pointer rounded border-gray-300 accent-limeGreen hover:bg-limeGreen              focus:ring-2 focus:ring-green-500"
          />
          <label
            htmlFor="hasUppercase"
            className="ml-2 cursor-pointer text-lg font-medium text-white"
          >
            Include Uppercase letters
          </label>
        </div>
      </div>
      <div>
        <div className="mr-4 flex items-center">
          <input
            checked={hasLowercaseAlphabets}
            onChange={(e) => dispatch(toggleHasLowercaseAlphabets())}
            id="hasLowercase"
            type="checkbox"
            value={hasLowercaseAlphabets}
            className="h-5 w-5 cursor-pointer rounded border-gray-300  accent-limeGreen focus:ring-2 focus:ring-green-500"
          />
          <label
            htmlFor="hasLowercase"
            className="ml-2 cursor-pointer text-lg font-medium text-white"
          >
            Include lowercase letters
          </label>
        </div>
      </div>
      <div>
        <div className="mr-4 flex items-center">
          <input
            checked={hasNumbers}
            onChange={(e) => dispatch(toggleHasNumbers())}
            id="hasNumbers"
            type="checkbox"
            value={hasNumbers}
            className="h-5 w-5 cursor-pointer rounded border-gray-300 accent-limeGreen hover:bg-limeGreen focus:ring-2 focus:ring-green-500"
          />
          <label
            htmlFor="hasNumbers"
            className="ml-2 cursor-pointer text-lg font-medium text-white"
          >
            Include Numbers
          </label>
        </div>
      </div>
      <div>
        <div className="mr-4 flex items-center">
          <input
            checked={hasSpecialCharacters}
            onChange={(e) => dispatch(toggleHasSpecialCharacters())}
            id="hasSpecialCharacters"
            type="checkbox"
            value={hasSpecialCharacters}
            className="h-5 w-5 cursor-pointer rounded border-gray-300 accent-limeGreen hover:bg-limeGreen focus:ring-2 focus:ring-green-500"
          />
          <label
            htmlFor="hasSpecialCharacters"
            className="ml-2 cursor-pointer text-lg font-medium text-white"
          >
            Include Symbols
          </label>
        </div>
      </div>
    </section>
  );
};

export default PasswordFeatures;
