"use client";

import { useState } from "react";

interface Option {
  name: string;
  choices: string[];
}

interface CustomizeProductsProps {
  options: Option[];
  onOptionSelect: (name: string, value: string) => void;
}

const CustomizeProducts: React.FC<CustomizeProductsProps> = ({
  options,
  onOptionSelect,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});

  const handleOptionSelect = (name: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [name]: choice }));
    onOptionSelect(name, choice);
  };

  return (
    <div className="flex flex-col gap-6">
      {options.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium text-lg">{option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices.map((choice) => (
              <li
                className={`ring-1 ring-primary text-primary rounded-md py-1 px-4 text-sm cursor-pointer ${
                  selectedOptions[option.name] === choice
                    ? "bg-primary text-primary-foreground"
                    : ""
                }`}
                key={choice}
                onClick={() => handleOptionSelect(option.name, choice)}
              >
                {choice}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CustomizeProducts;
