import { useState, useCallback, MouseEvent } from "react";
export default function useLogin(): [Function, boolean] {
  const [loading, setIsLoading] = useState(false);

  const login = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/hello");
      const json = await response.json();
      console.log("json", json);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  }, []);
  return [login, loading];
}
