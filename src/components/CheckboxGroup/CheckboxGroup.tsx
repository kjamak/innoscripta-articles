// src/components/CheckboxGroup/CheckboxGroup.tsx
import React from "react";
import {
  CheckboxGroupContainer,
  CheckboxItem,
  CheckboxLabel,
  CheckboxTitle,
} from "./CheckboxGroup.styles";

interface CheckboxGroupProps {
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
  label: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  selectedOptions,
  onChange,
  label,
}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    let updatedSelectedOptions = [...selectedOptions];

    if (event.target.checked) {
      updatedSelectedOptions.push(value);
    } else {
      updatedSelectedOptions = updatedSelectedOptions.filter(
        (option) => option !== value
      );
    }

    onChange(updatedSelectedOptions);
  };

  return (
    <CheckboxGroupContainer>
      <CheckboxTitle>{label}</CheckboxTitle>
      {options.map((option) => (
        <CheckboxItem key={option}>
          <input
            type="checkbox"
            id={option}
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={handleCheckboxChange}
          />
          <CheckboxLabel htmlFor={option}>{option}</CheckboxLabel>
        </CheckboxItem>
      ))}
    </CheckboxGroupContainer>
  );
};

export default CheckboxGroup;
