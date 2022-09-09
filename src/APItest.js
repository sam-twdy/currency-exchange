import React, { useState, useEffect } from "react";


export default function APItest(props) {

    const {
    currencyOptions,
    onChange,
    setOpen,
    open,
    selectedCurrency,
    placeholder
  } = props

  const [inputValue, setInputValue] = useState(selectedCurrency);

  useEffect(() => {
    if (selectedCurrency) {
      setInputValue(currencyOptions.find((o) => o === selectedCurrency));
    }
  }, [selectedCurrency, currencyOptions]);

  useEffect(() => {
    if (!open && currencyOptions.findIndex((o) => o === inputValue) === -1) {
      if (!inputValue) {
        onChange("");
      } else {
        if (selectedCurrency) {
          setInputValue(currencyOptions.find((o) => o === selectedCurrency));
        } else {
          setInputValue("");
        }
      }
    }
  }, [open, currencyOptions, selectedCurrency, inputValue, onChange]);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const onInputClick = () => {
    setOpen((prevValue) => !prevValue);
  };

  const onOptionSelected = (option) => {
    onChange !== undefined && onChange(option);
    onChange !== undefined && setInputValue(option);
    setOpen(false);
  };

  const clearInput = () => {
    setInputValue('');
  };
  
  return (
    <div className="dropdown-container">
        <div className="input-container" onClick={onInputClick}>
          <input
            type="text"
            value={inputValue}
            onChange={onInputChange}
            placeholder={placeholder}
            onFocus={clearInput}
          />
        </div>
        <div className={`dropdown ${open ? "visible" : ""}`}>
            {currencyOptions
            .filter((item) => {
              const searchTerm = (inputValue || '').toUpperCase();
              const v = item.toUpperCase();

              if (!searchTerm) return true;

              return v.startsWith(searchTerm);
            })
            .map(option => (
            <div 
            key={option}
            onClick={() => onOptionSelected(option)}
            value={option}
            className="option"
            >
                {option}
            </div>
            ))}
        </div>
      </div>
  )
}