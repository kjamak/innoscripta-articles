import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f4f4f4;
`;

const NavigationButton = styled(Link)`
  padding: 15px 30px;
  margin: 10px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 18px;
  min-width: 200px;

  &:hover {
    background-color: #0056b3;
  }
`;

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <h1>Welcome to the Innoscripta News</h1>
      <NavigationButton to="/personalized-feed">
        Go to Personalized Feed
      </NavigationButton>
      <NavigationButton to="/search">Search for Articles</NavigationButton>
    </HomePageContainer>
  );
};

export default HomePage;
