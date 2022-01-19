import React from "react";
import { Link } from "react-router-dom";
import { getDescription, getHoureSince } from "../../utils/utils";

function PrimaryCard({ article }) {
  return (
    <div className="card">
      <div className="card_img">
        <img
          src={article?.image_url || "https://via.placeholder.com/200"}
          alt={article?.title}
        />
      </div>
      <div className="card_content opaque">
        <Link to={`/news/${article?.id}`}>
          <span className="card_content--title">{article?.title}</span>
        </Link>
        <span className="card_content--body">
          {getDescription(article?.description)}
        </span>
        <div className="flex_between_content">
          <div>
            <a href={article?.link} target="_blank" rel="noreferrer">
              {article?.sourceId || "Source"}
            </a>
          </div>
          <div>{getHoureSince(article?.pubDate)}</div>
        </div>
      </div>
    </div>
  );
}

export default PrimaryCard;
