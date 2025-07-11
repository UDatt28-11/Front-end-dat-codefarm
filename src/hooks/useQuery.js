import { useState, useEffect } from "react";

const useQuery = (initial) => {
  const [query, setQuery] = useState(initial);
  const updateQuery = (newQuery) => {
    setQuery((prev) => {
      const updated = { ...prev, ...newQuery };

      // Update URL params
      const searchParams = new URLSearchParams(updated).toString();
      window.history.replaceState(null, "", `?${searchParams}`);

      return updated;
    });
  };

  const resetQuery = () => {
    setQuery(initial);
    const searchParams = new URLSearchParams(initial).toString();
    window.history.replaceState(null, "", `?${searchParams}`);
  };

  return [query, updateQuery, resetQuery];
};

export default useQuery;
