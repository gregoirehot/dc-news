import React from "react";
import Error from "../components/common/Error";
import { useDataApi } from "../services/newsApi";

function Timeline() {
  const [{ articles, isLoading, error }] = useDataApi();

  console.log("articles", articles);

  return (
    <>
      {error && <Error error={error} />}

      {isLoading ? (
        <div>Chargement ...</div>
      ) : (
        <ul>
          {articles
            ? articles.map((article, i) => (
                <li key={i}>
                  <a href={article.link}>{article.title}</a>
                </li>
              ))
            : ""}
        </ul>
      )}
    </>
  );
}

export default Timeline;
