import React from "react";
import { Link } from "react-router-dom";
import Error from "../../components/common/Error";
import Loading from "../../components/common/Loading";
import HeaderTimeline from "./HeaderTimeline";
import PrimaryCard from "./PrimaryCard";

function Timeline({ dataApiNews }) {
  const [{ articles, isLoading, error }] = dataApiNews;

  console.log("articles", articles);

  return (
    <>
      <HeaderTimeline />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {articles
            ? articles.map((article, i) => (
                <div key={article?.id}>
                  {i === 0 ? (
                    <PrimaryCard article={article} />
                  ) : (
                    <div>
                      <Link to={`/news/${article?.id}`}>{article?.title}</Link>
                      <br />
                      <a href={article?.link}>
                        {(article && article.source_id) || "Source"}
                      </a>
                    </div>
                  )}
                </div>
              ))
            : "Aucune actualités"}
        </>
      )}

      {error && <Error error={error} />}
    </>
  );
}

export default Timeline;
