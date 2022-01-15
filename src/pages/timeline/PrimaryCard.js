import React from "react";
import { Link } from "react-router-dom";

function PrimaryCard({ article }) {
  return (
    <div className="card">
      <div className="card_img">
        <Link to={`/news/${article?.id}`}>
          <img
            src={article?.image_url || "https://via.placeholder.com/200"}
            alt={article?.title}
          />
        </Link>
      </div>
      <div className="card_content opaque">
        <Link to={`/news/${article?.id}`}>
          <span className="card_content--title">{article?.title}</span>
        </Link>
        <span className="card_content--body">
          {`${
            article && article?.description
              ? article?.description.slice(0, 220)
              : ""
          }...`}
        </span>
        <a href={article?.link} target="_blank" rel="noreferrer">
          {(article && article.source_id) || "Source"}
        </a>
      </div>
    </div>
  );
}

export default PrimaryCard;
