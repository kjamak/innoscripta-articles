import axios from "axios";
import { Article } from "../types";

const GUARDIAN_API_KEY = "0ac6ae62-2b9c-4b7c-8207-88db93d357be"; // Replace with your actual Guardian API key

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
      "api-key": GUARDIAN_API_KEY,
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
