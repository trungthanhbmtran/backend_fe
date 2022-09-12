import { useState,useCallback } from 'react';

const useModal = (initialState = false) => {
  const [isShowing, setIsShowing] = useState(initialState);
 // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setIsShowing(isShowing => !isShowing), []);

  return [ isShowing,toggle]
};

export default useModal;