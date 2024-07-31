import React, { useState } from "react";
import {
  SearchFilterContainer,
  Input,
  Select,
  Button,
} from "./SearchFilterBar.styles";

interface SearchFilterBarProps {
  onSearch: (keyword: string, filters: Filters) => void;
  filterOptions: {
    dateOptions: Array<{ value: string; label: string }>;
    categoryOptions: Array<{ value: string; label: string }>;
    sourceOptions: Array<{ value: string; label: string }>;
  };
}

interface Filters {
  date: string;
  category: string;
  source: string;
}

const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  onSearch,
  filterOptions,
}) => {
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
        {filterOptions.dateOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <Select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      >
        <option value="">All Categories</option>
        {filterOptions.categoryOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <Select
        value={filters.source}
        onChange={(e) => setFilters({ ...filters, source: e.target.value })}
      >
        <option value="">All Sources</option>
        {filterOptions.sourceOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <Button onClick={handleSearch}>Search</Button>
    </SearchFilterContainer>
  );
};

export default SearchFilterBar;
