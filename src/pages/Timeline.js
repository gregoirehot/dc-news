import React from "react";
import { useDataApi } from "../services/newsApi";

function Timeline() {
  const [{ articles, isLoading, isError }] = useDataApi();

  console.log('articles', articles);

  return (
    <>
      {isError && <div>TODO Error management ...</div>}

      {isLoading ? (
        <div>Chargement ...</div>
      ) : (
        <ul>
          {articles
            ? articles.map((article, i) => (
                <li key={i}>
                  <a href={article.url}>{article.title}</a>
                </li>
              ))
            : ""}
        </ul>
      )}
    </>
  );
}

export default Timeline;
