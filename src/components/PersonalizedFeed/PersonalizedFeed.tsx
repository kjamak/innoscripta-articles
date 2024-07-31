import React, { useState, useEffect } from "react";
import {
  FeedContainer,
  PreferenceForm,
  SaveButton,
} from "./PersonalizedFeed.styles";
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import ArticleList from "../ArticleList/ArticleList";
import { useFetchArticles } from "../../hooks/useFetchArticles";

const sources = ["newsapi", "theguardian", "nytimes"];
const categories = ["technology", "business", "sports"];
const authors = ["Author 1", "Author 2", "Author 3"];

const PersonalizedFeed: React.FC = () => {
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);

  // Load saved preferences from local storage
  useEffect(() => {
    const savedSources = localStorage.getItem("preferredSources");
    const savedCategories = localStorage.getItem("preferredCategories");
    const savedAuthors = localStorage.getItem("preferredAuthors");

    if (savedSources) setSelectedSources(JSON.parse(savedSources));
    if (savedCategories) setSelectedCategories(JSON.parse(savedCategories));
    if (savedAuthors) setSelectedAuthors(JSON.parse(savedAuthors));
  }, []);

  // Fetch and filter articles using the custom hook
  const { articles, isLoading, error } = useFetchArticles({
    keyword: "",
    sources: selectedSources,
    category: selectedCategories,
    date: "", // Add date if needed
  });

  console.log(articles);

  // Save preferences to local storage
  const handleSavePreferences = () => {
    localStorage.setItem("preferredSources", JSON.stringify(selectedSources));
    localStorage.setItem(
      "preferredCategories",
      JSON.stringify(selectedCategories)
    );
    localStorage.setItem("preferredAuthors", JSON.stringify(selectedAuthors));
  };

  return (
    <FeedContainer>
      <h2>Personalized News Feed</h2>
      <PreferenceForm>
        <CheckboxGroup
          options={sources}
          selectedOptions={selectedSources}
          onChange={setSelectedSources}
          label="Select Sources"
        />
        <CheckboxGroup
          options={categories}
          selectedOptions={selectedCategories}
          onChange={setSelectedCategories}
          label="Select Categories"
        />
        <CheckboxGroup
          options={authors}
          selectedOptions={selectedAuthors}
          onChange={setSelectedAuthors}
          label="Select Authors"
        />
        <SaveButton onClick={handleSavePreferences}>
          Save Preferences
        </SaveButton>
      </PreferenceForm>

      {isLoading && <p>Loading articles...</p>}

      {!isLoading && <ArticleList articles={articles} />}
    </FeedContainer>
  );
};

export default PersonalizedFeed;
