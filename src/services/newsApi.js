import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { API_KEY, DEFAULTS_DOMAINS, URL_NEWS_API } from "../const/newsApiConst";
import { addIdToElement } from "../utils/utils";

const getUrlAPi = (domain) => {
  const domainsParam = domain || DEFAULTS_DOMAINS;
  const urlOld = `http://${URL_NEWS_API}?sources=${domainsParam}&access_key=${API_KEY}`;
  console.log("urlOld", urlOld);
  const url =
    "https://newsdata.io/api/1/news?apikey=pub_36334c1ad7321169f1ef3868321229d477a6&q=news";
  return url;
};

export const useDataApi = (domain) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const apiUrl = getUrlAPi(domain);

  const fetchData = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      const result = await axios(apiUrl);
      console.log("result", result);
      const articlesResult = result?.data?.data;
      // add id to element in array
      setArticles(addIdToElement(articlesResult));
    } catch (error) {
      setError(JSON.stringify(error));
    }

    setIsLoading(false);
  }, [apiUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [{ articles, isLoading, error }];
};
