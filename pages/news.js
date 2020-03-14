import Layout from "../components/layout";

import fetch from "isomorphic-unfetch";
import NewsCard from "../components/newsCard";

const News = ({ news }) => {
  return (
    <Layout>
      {news.articles.map((article, i) => {
        return <NewsCard key={i} article={article} />;
      })}
    </Layout>
  );
};

News.getInitialProps = async () => {
  var url = `http://newsapi.org/v2/everything?q=rock-climbing&language=en&apiKey=${process.env.NEWS_API_KEY}`;
  const news = await fetch(url)
    .then(r => r.json())
    .then(data => {
      return data;
    });
  return { news };
};
export default News;
