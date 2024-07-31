import React, { useState } from "react";
import {
  SearchFilterContainer,
  Input,
  Select,
  Button,
} from "./SearchFilterBar.styles";

interface SearchFilterBarProps {
  onSearch: (keyword: string, filters: Filters) => void;
}

interface Filters {
  date: string;
  category: string;
  source: string;
}

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [filters, setFilters] = useState<Filters>({
    date: "",
    category: "",
    source: "",
  });

  const handleSearch = () => {
    onSearch(keyword, filters);
  };

  return (
    <SearchFilterContainer>
      <Input
        type="text"
        placeholder="Search for articles..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Select
        value={filters.date}
        onChange={(e) => setFilters({ ...filters, date: e.target.value })}
      >
        <option value="">All Dates</option>
        <option value="last24hours">Last 24 hours</option>
        <option value="lastweek">Last Week</option>
        <option value="lastmonth">Last Month</option>
      </Select>
      <Select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      >
        <option value="">All Categories</option>
        <option value="technology">Technology</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
      </Select>
      <Select
        value={filters.source}
        onChange={(e) => setFilters({ ...filters, source: e.target.value })}
      >
        <option value="">All Sources</option>
        <option value="newsapi">NewsAPI</option>
        <option value="theguardian">The Guardian</option>
        <option value="nytimes">New York Times</option>
      </Select>
      <Button onClick={handleSearch}>Search</Button>
    </SearchFilterContainer>
  );
};

export default SearchFilterBar;
