import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [Data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "x-rapidapi-key": "c699cd5f8emsh09d5f93d88367c4p158ab4jsnb7f37dddf1a7",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
    params: {
      ...query,
    },
  };
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await axios.request(options);
      setData(result.data.data);
    } catch (error) {
      setError(error);
      alert("There is and error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { Data, isloading, error, refetch };
};

export default useFetch;
