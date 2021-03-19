import { useState, useCallback } from "react";
export default function useLogin() {
  const [loading, setIsLoading] = useState(false);

  const login = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/hello");
      const json = await response.json();
      setIsLoading(false);
      return json;
    } catch (e) {}
  }, []);
  return [login, loading];
}
