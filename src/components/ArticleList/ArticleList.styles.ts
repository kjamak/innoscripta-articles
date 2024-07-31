import styled from "styled-components";

export const ArticleListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 10px;
    margin-top: 15px;
  }
`;

export const ArticleItem = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const ArticleTitle = styled.a`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ArticleMeta = styled.p`
  font-size: 0.875rem;
  color: #555;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const ArticleDescription = styled.p`
  font-size: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;
