import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { API_KEY, DEFAULTS_DOMAINS, URL_NEWS_API } from "../const/newsApiConst";
import { addIdToElement } from "../utils/utils";

const getUrlAPi = (country) => {
  const domainsParam = country || DEFAULTS_DOMAINS;
  const url = `https://${URL_NEWS_API}?country=${domainsParam}&apikey=${API_KEY}`;
  return url;
};

export const useDataApi = () => {
  const [country, setCountry] = useState(DEFAULTS_DOMAINS);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const apiUrl = getUrlAPi(country);

  const fetchData = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      const result = await axios(apiUrl);
      const articlesResult = result?.data?.results;
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

  return [{ articles, isLoading, error }, setCountry];
};

export const getArticle = (articles, idArticle) => {
  return articles?.find((article) => article?.id === parseInt(idArticle));
};
