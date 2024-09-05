import { useEffect, useState } from "react";

const UseChairdata = () => {
  const [chair, setchair] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setchair(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return [chair, setchair,loading,setLoading];
};

export default UseChairdata;
