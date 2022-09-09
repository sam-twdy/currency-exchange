import { useState, useEffect } from 'react';
//import SelectComponent from "./SelectComponent";
import APItest from './APItest';
//import {reactLocalStorage} from 'reactjs-localstorage';

const BASE_URL = 'https://api.frankfurter.app/latest?from=USD'

  
export default function CurrencyRow() {

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [open, setOpen] = useState(false);
    const [fromCurrency, setFromCurrency] = useState('')

//    reactLocalStorage.set('iniCurrency', fromCurrency)
//    const storedCurrency = reactLocalStorage.get('iniCurrency');

    useEffect(() => {
        fetch(BASE_URL)
          .then(res => res.json())
          .then(data => {
            setCurrencyOptions([data.base, ...Object.keys(data.rates)])
            setFromCurrency(data.base)
          })
      }, [])
  
    return (
      <div className="row-style">
        <APItest 
        currencyOptions={currencyOptions}
        open={open}
        setOpen={setOpen}
        selectedCurrency={fromCurrency}
        onChange={(item) => setFromCurrency(item)}
        placeholder = {'Enter Search...'}
        />
        <p>selected option: {fromCurrency}</p>
      </div>
    );
  }