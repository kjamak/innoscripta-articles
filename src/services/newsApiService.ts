import axios from "axios";
import { Article } from "../types";

const NEWS_API_KEY = "e4dd39fd250a40d48a8e8e98dffa4ac0"; // Replace with your actual NewsAPI key

export const fetchNewsApiArticles = async (
  keyword: string = "",
  categories: string[],
  date: string
): Promise<Article[]> => {
  let from = "";

  if (date === "last24hours") {
    from = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  } else if (date === "lastweek") {
    from = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  } else if (date === "lastmonth") {
    from = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  }

  const response = await axios.get("https://newsapi.org/v2/everything", {
    params: {
      q: keyword ? keyword : "news",
      category: categories.length ? categories.join(",") : undefined,
      from: from ? from : undefined,
      apiKey: NEWS_API_KEY,
    },
  });

  return response.data.articles.map((article: any) => ({
    title: article.title,
    source: article.source.name,
    date: article.publishedAt,
    description: article.description,
    url: article.url,
    category: categories[0] || "general", // Use first category or default
  }));
};
