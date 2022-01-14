import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { API_KEY, DEFAULTS_DOMAINS, URL_NEWS_API } from "../const/newsApiConst";
import { addIdToElement } from "../utils/utils";

const getUrlAPi = (domain) => {
  const domainsParam = domain || DEFAULTS_DOMAINS;
  const url = `https://${URL_NEWS_API}?domains=${domainsParam}&apiKey=${API_KEY}`;
  return url;
};

export const useDataApi = (domain) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const apiUrl = getUrlAPi(domain);

  const fetchData = useCallback(async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await axios(apiUrl);
      const articlesResult = result?.data?.articles;
      // add id to element in array
      setArticles(addIdToElement(articlesResult));
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  }, [apiUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [{ articles, isLoading, isError }];
};
