import React from "react";
import {
  ArticleListContainer,
  ArticleItem,
  ArticleTitle,
  ArticleMeta,
  ArticleDescription,
} from "./ArticleList.styles";

interface Article {
  title: string;
  source: string;
  date: string;
  description: string;
  url: string;
}

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  // Check if there are any articles to display
  if (articles.length === 0) {
    return <p>No articles found. Try adjusting your search and filters.</p>;
  }

  return (
    <ArticleListContainer>
      {articles.map((article, index) => (
        <ArticleItem key={index}>
          <ArticleTitle
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {article.title}
          </ArticleTitle>
          <ArticleMeta>
            {article.source} - {new Date(article.date).toLocaleDateString()}
          </ArticleMeta>
          <ArticleDescription>{article.description}</ArticleDescription>
        </ArticleItem>
      ))}
    </ArticleListContainer>
  );
};

export default ArticleList;
