import React from "react";
import { useEffect, useState } from "react";
const useFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      // setTimeout(() => {
      //   setFriends(data);
      //   setLoading(false);
      // }, 2000);
      setFriends(data);
      setLoading(false);
      // console.log(friends, "friends");
    };
    fetchData();
  }, []);
  return { friends, loading };
};

export default useFriends;
