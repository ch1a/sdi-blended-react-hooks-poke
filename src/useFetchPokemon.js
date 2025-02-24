/*
this is a custom hook that fetches data from a given URL and provides a stateful API for handling the response, loading state, and error state.

In this example, we use the "useState" and "useEffect" hooks from React to manage the state of the component. The useEffect hook is used to fetch the data from the given URL when the component mounts and updates the state when the URL changes.
url is passed as a prop to the custom hook.
The custom hook returns an object with three properties: data, loading, and error. The data property contains the fetched data, loading property indicates whether the data is being fetched, and error property contains any error that occurred during the fetch operation.
stores the data

*/

import { useState, useEffect } from "react";

const useFetchPokemon = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetchPokemon;
