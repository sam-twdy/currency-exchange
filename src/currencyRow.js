import { useState, useEffect } from 'react';
import SelectComponent from "./SelectComponent";

const options = [
    { key: 1, value: "Test 1" },
    { key: 2, value: "Test 2" },
    { key: 3, value: "Test 3" },
    { key: 4, value: "Test 4" }
];

const BASE_URL = 'https://api.frankfurter.app/latest?from=USD'

  
export default function CurrencyRow() {

    const [currencyOptions, setCurrencyOptions] = useState([])
    console.log(currencyOptions)

    useEffect(() => {
        fetch(BASE_URL)
          .then(res => res.json())
          .then(data => {
            const firstCurrency = Object.keys(data.rates)[0]
            setCurrencyOptions([data.base, ...Object.keys(data.rates)])
          })
      }, [])

    const [selectedOption, setSelectedOption] = useState("");
  
    return (
      <div className="row-style">
        <SelectComponent
          options={options}
          onChange={(item) => setSelectedOption(item)}
          selectedKey={selectedOption}
          placeholder={"type to search"}
        />
        <p>selected option: {selectedOption}</p>
      </div>
    );
  }