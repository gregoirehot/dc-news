import React from "react";
import Error from "../../components/common/Error";
import Loading from "../../components/common/Loading";
import Card from "./Card";
import HeaderTimeline from "./HeaderTimeline";
import PrimaryCard from "./PrimaryCard";

function Timeline({ dataApiNews }) {
  const [{ articles, isLoading, error }] = dataApiNews;

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
                    <Card
                      id={article?.id}
                      imageUrl={article?.image_url}
                      title={article?.title}
                      description={article?.description}
                      link={article?.link}
                      sourceId={article?.source_id}
                      pubDate={article?.pubDate}
                    />
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
