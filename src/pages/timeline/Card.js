import React from "react";
import { Link } from "react-router-dom";
import { getDescription, getHoureSince } from "../../utils/utils";

function Card({
  id,
  imageUrl,
  title,
  description,
  link,
  sourceId,
  fullDescription,
  pubDate,
}) {
  return (
    <div className="card side-image">
      <div className="card_img">
        <img src={imageUrl || "https://via.placeholder.com/200"} alt={title} />
      </div>
      <div className="card_content_side">
        <Link to={`/news/${id}`}>
          <span className="card_content--title">{title}</span>
        </Link>
        <div className="card_content--body">
          {fullDescription || getDescription(description)}
        </div>
        <div className="flex_between_content">
          <div>
            <a href={link} target="_blank" rel="noreferrer">
              {sourceId || "Source"}
            </a>
          </div>
          <div>{getHoureSince(pubDate)}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
