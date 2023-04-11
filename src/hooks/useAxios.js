import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function useAxios(configRequest) {
  const { axiosInstance, method, url } = configRequest;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axiosInstance[method](url);
      setData(response.data);
      setLoading(false);
      return response.data;
    } catch (error) {
      navigate("/");
      toast.error("Something went wrong, try again!", {
        toastId: "error1",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, loading];
}
