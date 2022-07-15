import { useState } from "react";

const useLoader = (action) => {
  const [isLoading, setIsLoading] = useState(false);
  const performAction = (...args) => {
    setIsLoading(true);
    return action(...args).finally(() => setIsLoading(false));
  };
  return [performAction, isLoading];
};
export default useLoader;