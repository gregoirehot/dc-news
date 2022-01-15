import React from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/common/Error";
import Loading from "../../components/common/Loading";
import { getArticle } from "../../services/newsApi";
import Card from "../timeline/Card";

function News({ dataApiNews }) {
  const { id } = useParams();
  const [{ articles, isLoading, error }] = dataApiNews;
  const article = getArticle(articles, id);

  console.log("article", article);

  return (
    <>
      {error && <Error error={error} />}

      {isLoading ? (
        <Loading />
      ) : (
        <div>{article ? <Card article={article} /> : "Aucune actualité"}</div>
      )}
    </>
  );
}

export default News;
