import { useState } from "react";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, token) => {
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}${url}`, {
        method: "GET",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": "application/json",
        },
      });
      const jsonData = await response.json();

      if (jsonData?.success === false) {
        throw new Error(jsonData.message);
      }

      setError(null);
      setLoading(false);

      return jsonData;
    } catch (error) {
      setError(error?.message || error);
      setLoading(false);
    }
  };

  const submitData = async (url, formdata, method, token) => {
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}${url}`, {
        method: method || "POST",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const jsonData = await response.json();

      if (jsonData?.success === false) {
        throw new Error(jsonData.message);
      }

      setLoading(false);
      setError(null);

      return jsonData;
    } catch (error) {
      setError(error?.message || error);
      setLoading(false);
    }
  };

  return { loading, error, fetchData, submitData };
};
