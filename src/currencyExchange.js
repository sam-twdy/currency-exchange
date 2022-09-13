//import CurrencyRow from './currencyRow';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExchangeTable from './exchangeTable';
import { useState, useEffect } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import APItest from './APItest';
import ValueRow from './valueRow';

export default function CurrencyExchange() {

  const BASE_URL = 'https://api.frankfurter.app/latest?from=USD'

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [open, setOpen] = useState(false);
    const [toCurrency, setToCurrency] = useState([])
    const [fromCurrency, setFromCurrency] = useState('')
    const [amount, setAmount] = useState(5)
    const [exchangeRate, setExchangeRate] = useState([])

    let toAmount = exchangeRate.map(arr => arr * amount)

    useEffect(() => {
        fetch(BASE_URL)
          .then(res => res.json())
          .then(data => {
            /*const currency = {
              name: Object.keys(data.rates),
              value: Object.values(data.rates)
            }
            */
            const currency = Object.keys(data.rates)
            const rates = Object.values(data.rates)
            setCurrencyOptions([data.base, ...Object.keys(data.rates)])
            setFromCurrency(data.base)
            setToCurrency(currency)
            setExchangeRate(rates)
          })
      }, [])

      const currencyExchangeList = {};

      toCurrency.forEach((element, index) => {
        currencyExchangeList[element] = exchangeRate.map(arr => arr * amount)[index];
      });

      console.log(currencyExchangeList);


      useEffect(() => {
        if (fromCurrency !== '') reactLocalStorage.set('iniCurrency', fromCurrency);
      }, [fromCurrency])

      const storedCurrency = reactLocalStorage.get('iniCurrency');

      function handleFromAmountChange(e) {
        setAmount(e.target.value)
      }

    return (
        <div className='configure-wrapper'>
        <div className='linebreak'/>
        <Row className='row header-gap'>
          <Col lg={3} className='config'>
            <div className='linebreak'/>
            <div className='config-title'>Currency Converter</div>
            <div className='display-container'>
            <div className="row-style">
              <ValueRow
              onChangeAmount={handleFromAmountChange}
              amount={amount}
              />
              <APItest 
              currencyOptions={currencyOptions}
              open={open}
              setOpen={setOpen}
              selectedCurrency={fromCurrency}
              onChange={(item) => setFromCurrency(item)}
              placeholder = {'Enter Search...'}
              storedCurrency={storedCurrency}
              />
              <p> </p>
            </div>
            </div>
            <div className='linebreak'/>
          </Col>
          <Col lg={8} className='exchange-table'>
            <div className=''>Currency Exchange Rates</div>
            <ExchangeTable
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            toCurrency={toCurrency}
            amount={amount}
            toAmount={toAmount}
            currencyExchangeList={currencyExchangeList}
            />
          </Col>
        </Row>
      </div> 
    )
}