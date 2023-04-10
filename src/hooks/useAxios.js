import { useState, useEffect, useRef } from "react";

export default function useAxios(configRequest) {
  const { axiosInstance, method, url } = configRequest;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const run = useRef(false);

  const fetchData = async () => {
    const controller = new AbortController();
    try {
      const response = await axiosInstance[method](url, {
        signal: controller.signal,
      });
      setData(response.data);
      setLoading(false);
      return response.data;
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (run.current) {
      fetchData();
    }
    run.current = true;
  }, []);

  return [data, loading];
}
