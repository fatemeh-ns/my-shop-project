import { useEffect, useState } from "react";
import axios from "axios";

export const useImageFetch = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setClothes(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return clothes;
};
