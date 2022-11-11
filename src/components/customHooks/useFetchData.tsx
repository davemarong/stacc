import { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  url: string;
}

export const useFetchData = ({ url }: Props) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  // Functions
  // ASYNC AWAIT
  useEffect(() => {
    (async () => {
      const response = await axios.get(url);
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    })();
  }, []);

  return [data, loading];
};
