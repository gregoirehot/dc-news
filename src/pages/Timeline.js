import React from "react";
import { Link } from "react-router-dom";
import Error from "../components/common/Error";
import Loading from "../components/common/Loading";

function Timeline({ dataApiNews }) {
  const [{ articles, isLoading, error }] = dataApiNews;

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
