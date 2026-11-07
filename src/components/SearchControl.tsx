import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

interface SearchButtonProps {
  onClick?: () => void;
  variant?: string;
  text?: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({
  onClick,
  variant = "primary",
  text = "Buscar",
}) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {text} <FaSearch className="ms-1" />
    </Button>
  );
};

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
  placeholder?: string;
  buttonVariant?: string;
  buttonText?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onSearch,
  placeholder = "Buscar...",
  buttonVariant = "primary",
  buttonText = "Buscar",
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch();
    }
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
      <SearchButton
        onClick={onSearch}
        variant={buttonVariant}
        text={buttonText}
      />
    </InputGroup>
  );
};

export { SearchInput }