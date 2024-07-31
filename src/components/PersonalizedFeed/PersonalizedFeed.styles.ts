import styled from "styled-components";

export const FeedContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const PreferenceForm = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
`;

export const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: #218838;
  }
`;
