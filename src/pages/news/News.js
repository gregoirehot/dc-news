import React from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/common/Error";
import Loading from "../../components/common/Loading";
import { getArticle } from "../../services/newsApi";
import Card from "../timeline/Card";

function News({ articles, isLoading, error }) {
  const { id } = useParams();
  const article = getArticle(articles, id);

  return (
    <>
      {error && <Error error={error} />}

      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {article ? (
            <Card
              id={article?.id}
              imageUrl={article?.image_url}
              title={article?.title}
              fullDescription={article?.full_description}
              link={article?.link}
              sourceId={article?.source_id}
              pubDate={article?.pubDate}
            />
          ) : (
            "Aucune actualité"
          )}
        </div>
      )}
    </>
  );
}

export default News;
