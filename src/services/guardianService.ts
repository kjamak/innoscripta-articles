import axios from "axios";
import { Article } from "../types";

export const fetchGuardianArticles = async (
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

  const response = await axios.get("https://content.guardianapis.com/search", {
    params: {
      q: keyword ? keyword : "news",
      "from-date": from ? from : undefined,
      section: categories.length ? categories.join(",") : undefined,
      "api-key": process.env.GUARDIAN_API_KEY,
    },
  });

  return response.data.response.results.map((article: any) => ({
    title: article.webTitle,
    source: "The Guardian",
    date: article.webPublicationDate,
    description: article?.fields?.trailText,
    url: article.webUrl,
    category: categories[0] || "general", // Use first category or default
  }));
};
