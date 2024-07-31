import { useQuery } from "react-query";
import { fetchNewsApiArticles } from "../services/newsApiService";
import { fetchGuardianArticles } from "../services/guardianService";
import { fetchNYTimesArticles } from "../services/nyTimesService";
import { Article } from "../types";

interface FetchArticlesParams {
  keyword?: string;
  sources?: string[]; // Array of sources; if not provided, use all sources
  category?: string[];
  date?: string;
}

export const useFetchArticles = ({
  keyword = "",
  sources = [], // Default to an empty array
  category = [],
  date = "",
}: FetchArticlesParams) => {
  const fetchAllArticles = async () => {
    const promises = [];
    console.log(sources);
    if (sources.length === 0 || sources.includes("newsapi")) {
      promises.push(fetchNewsApiArticles(keyword, category, date));
    }
    if (sources.length === 0 || sources.includes("theguardian")) {
      promises.push(fetchGuardianArticles(keyword, category, date));
    }
    if (sources.length === 0 || sources.includes("nytimes")) {
      promises.push(fetchNYTimesArticles(keyword, category, date));
    }

    // Wait for all the API calls to complete and flatten the results
    const results = await Promise.all(promises);
    console.log(results);
    return results.flat();
  };
  console.log(category);
  const {
    data: articles,
    isLoading,
    error,
  } = useQuery(
    ["articles", keyword, sources, category, date],
    fetchAllArticles,
    { enabled: true } // Always enabled as we default to using all sources if none are specified
  );
  console.log(articles);
  return { articles: articles || [], isLoading, error };
};
