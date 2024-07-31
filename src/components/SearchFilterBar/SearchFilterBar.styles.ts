import styled from "styled-components";

export const SearchFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #f0f4f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 95%;

  @media (min-width: 768px) {
    width: auto;
    flex: 1;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    flex: 1;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (min-width: 768px) {
    flex-shrink: 0;
  }
`;
