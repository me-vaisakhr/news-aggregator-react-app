import React from 'react'

const getQuery = () => {
    if (typeof window !== 'undefined') {
      return new URLSearchParams(window.location.search);
    }
    return new URLSearchParams();
};

const getQueryStringVal = (key = null)  => {
    return getQuery().get(key);
};

const useQueryParam = (key, defaultVal) => {
    const [query, setQuery] = React.useState(getQueryStringVal(key) || defaultVal);
  
    const updateUrl = (newVal) => {
      setQuery(newVal);
  
      const query = getQuery();
  
      if (newVal.trim() !== '') {
        query.set(key, newVal);
      } else {
        query.delete(key);
      }
  
      if (typeof window !== 'undefined') {
        const { protocol, pathname, host } = window.location;
        const newUrl = `${protocol}//${host}${pathname}?${query.toString()}`;
        window.history.pushState({}, '', newUrl);
      }
    };
  
    return [query, updateUrl];
};
  
export default useQueryParam;