import React from "react";

const NewsCard = ({ article }) => {
  console.log(article);
  return (
    <div className="newsCard">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <img src={article.urlToImage} alt="" />
      <style jsx>{`
        .newsCard {
          margin-bottom: 2rem;
          border: 1px solid #0002;
          padding: 1rem;
        }
        h2 {
          font-weight: 400;
          font-size: 1.2rem;
          color: #000;
          margin-bottom: 0.3rem;
        }
        p {
          color: #777;
          margin-bottom: 1rem;
        }
        img {
          width: 100%;
          height: 15vw;
          overflow: hidden;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default NewsCard;
