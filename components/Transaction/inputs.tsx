"use client";
import type React from "react";
import { useState, useRef } from "react";

interface InteractiveInputProps {
  label: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
}

export default function InteractiveInput({
  label,
  type = "text",
  value = "",
  onChange,
  required = false,
  disabled = false,
  error,
  className = "",
}: InteractiveInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const handleLabelClick = () => {
    inputRef.current?.focus();
  };

  const isLabelFloating = inputValue.length > 0 || isFocused;

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative">
        <input
          ref={inputRef}
          type={type}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={isLabelFloating ? "" : label}
          disabled={disabled}
          required={required}
          className={`
            w-full px-4 pt-5 py-3 text-sm bg-white border-1 rounded
                : "border-gray-300 hover:border-gray-400 focus:border-primary" leading-[20px]
            transition-all duration-200 ease-in-out outline-none font-[lato] font-regular 
            placeholder:text-gray-400
            ${
              error
                ? "border-red-400 focus:border-red-500"
                : isLabelFloating
                ? "border-primary focus:border-primary"
                : "border-gray-300 hover:border-gray-400 focus:border-primary"
            }
            ${
              disabled
                ? "opacity-50 cursor-not-allowed bg-gray-50 py-3"
                : "cursor-text py-3"
            }
            ${isLabelFloating ? "pt-6 pb-2" : "py-3"}
          `}
        />
        {isLabelFloating && (
          <label
            onClick={handleLabelClick}
            className={`
              absolute -top-2 left-3 px-2 text-sm font-medium font-[lato] font-regular leading-[18px]
              transition-all duration-200 ease-in-out cursor-text
              bg-white z-10
              ${error ? "text-red-500" : "text-primary"}
              ${disabled ? "cursor-not-allowed" : ""}
            `}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-500 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
