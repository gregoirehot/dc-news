import React from "react";
import { Link } from "react-router-dom";
import Error from "../components/common/Error";
import Loading from "../components/common/Loading";
import { useDataApi } from "../services/newsApi";

function Timeline() {
  const [{ articles, isLoading, error }] = useDataApi();

  console.log("articles", articles);

  return (
    <>
      {error && <Error error={error} />}

      {isLoading ? (
        <Loading />
      ) : (
        <ul>
          {articles
            ? articles.map((article) => (
                <li key={article?.id}>
                  <Link to={`/news/${article?.id}`}>{article?.title}</Link>
                  <br />
                  <a href={article?.link}>Source</a>
                </li>
              ))
            : "Aucune actualités"}
        </ul>
      )}
    </>
  );
}

export default Timeline;
