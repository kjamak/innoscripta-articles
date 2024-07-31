import axios from "axios";
import { Article } from "../types";

export const fetchNYTimesArticles = async (
  keyword: string = "",
  categories: string[],
  date: string
): Promise<Article[]> => {
  let from = "";

  if (date === "last24hours") {
    from = new Date(Date.now() - 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10);
  } else if (date === "lastweek") {
    from = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10);
  } else if (date === "lastmonth") {
    from = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10);
  }

  const response = await axios.get(
    "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    {
      params: {
        q: keyword,
        fq: categories.length
          ? `section_name:("${categories.join('","')}")`
          : undefined,
        begin_date: from ? from : undefined,
        "api-key": process.env.NYTIMES_API_KEY,
      },
    }
  );

  return response.data.response.docs.map((article: any) => ({
    title: article.headline.main,
    source: "New York Times",
    date: article.pub_date,
    description: article.abstract,
    url: article.web_url,
    category: categories[0] || "general", // Use first category or default
  }));
};
