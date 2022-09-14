//import CurrencyRow from './currencyRow';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExchangeTable from './exchangeTable';
import { useState, useEffect } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import APItest from './APItest';
import ValueRow from './valueRow';

export default function CurrencyExchange() {

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [open, setOpen] = useState(false);
    const [toCurrency, setToCurrency] = useState([])
    const [fromCurrency, setFromCurrency] = useState(['USD'])
    const [amount, setAmount] = useState(5)
    const [exchangeRate, setExchangeRate] = useState([])

  //const BASE_URL = (`https://api.frankfurter.app/latest?from=${fromCurrency}`)

    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?from=${fromCurrency}`)
          .then(res => res.json())
          .then(data => {
            const currency = Object.keys(data.rates)
            const rates = Object.values(data.rates)
            setCurrencyOptions([data.base, ...Object.keys(data.rates)])
            setFromCurrency(data.base)
            setToCurrency(currency)
            setExchangeRate(rates)
          })
      }, [fromCurrency])

      const currencyExchangeList = {};

      toCurrency.forEach((element, index) => {
        currencyExchangeList[element] = exchangeRate[index];
      });

      useEffect(() => {
        if (fromCurrency !== '') reactLocalStorage.set('iniCurrency', fromCurrency);
      }, [fromCurrency])

      const storedCurrency = reactLocalStorage.get('iniCurrency');

      function handleFromAmountChange(e) {
        if (e === undefined || e < 0.01) {
        setAmount(1)}
        else {
        setAmount(e)
        }
      }

      function refreshList(item) {
        if (item.length > 2) {
        setFromCurrency(item)
        fetch(`https://api.frankfurter.app/latest?from=${item}`)
        .then(res => res.json())
        .then(data => {
          const currency = Object.keys(data.rates)
          const rates = Object.values(data.rates)
          setCurrencyOptions([data.base, ...Object.keys(data.rates)])
          //setFromCurrency(data.base)
          setToCurrency(currency)
          setExchangeRate(rates)
        })}
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
              //onChange={(item) => setFromCurrency(item)}
              onChange={(item) => refreshList(item)}
              placeholder = {'Enter Search...'}
              storedCurrency={storedCurrency}
              refreshList={refreshList}
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
            currencyExchangeList={currencyExchangeList}
            />
          </Col>
        </Row>
      </div> 
    )
}