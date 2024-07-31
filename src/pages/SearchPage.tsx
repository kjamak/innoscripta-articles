import React, { useState } from "react";
import SearchFilterBar from "../components/SearchFilterBar/SearchFilterBar";
import ArticleList from "../components/ArticleList/ArticleList";
import { useFetchArticles } from "../hooks/useFetchArticles";
import { Article } from "../types";
import { sourceOptions, categoryOptions, dateOptions } from "../enums";
import {
  LoadingText,
  SearchPageContainer,
  SearchResultContainer,
} from "./SearchPage.styles";

interface Filters {
  date: string;
  category: string;
  source: string;
}

const SearchPage: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [filters, setFilters] = useState<Filters>({
    date: "",
    category: "",
    source: "",
  });

  // Fetch articles using the custom hook
  const { articles, isLoading, error } = useFetchArticles({
    keyword,
    date: filters.date,
    category: filters.category ? [filters.category] : [], // Wrap in an array for compatibility with the hook
    sources: filters.source ? [filters.source] : [], // Wrap in an array for compatibility with the hook
  });

  const handleSearch = (keyword: string, filters: Filters) => {
    setKeyword(keyword);
    setFilters(filters);
  };

  return (
    <SearchPageContainer>
      <h1>Search Articles</h1>
      <SearchFilterBar
        onSearch={handleSearch}
        filterOptions={{ dateOptions, categoryOptions, sourceOptions }}
      />
      {isLoading && <LoadingText>Loading articles...</LoadingText>}
      {!isLoading && (
        <SearchResultContainer>
          <ArticleList articles={articles as Article[]} />
        </SearchResultContainer>
      )}
    </SearchPageContainer>
  );
};

export default SearchPage;
