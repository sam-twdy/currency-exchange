import { Link } from "react-router-dom";
export default function ExchangeTable(props) {

    const {
        selectedCurrency,
        amount,
        currencyExchangeList
      } = props

    return (
        <table className="table table-sm bg-light mt-4">
          
          <thead>
            <tr className="exchangeRows">
            <th scope="col" className="iniColumn pr-4 py-2">{selectedCurrency}</th>
            <th scope="col" className="exchangeColumns pr-4 py-2">{amount.toFixed(2)} {selectedCurrency}</th>
            <th scope="col" className="exchangeColumns pr-4 py-2">1.00 {selectedCurrency}&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(currencyExchangeList).map((key, index) =>
              <tr className="exchangeRows">
                <td className="iniColumn pl-4 py-2">{key}</td>
                <td className="exchangeColumns pl-4 py-2">{(currencyExchangeList[key] * amount).toFixed(6)}</td> 
                <td className="exchangeColumns pl-4 py-2"><Link class='table-link' to={`/currencyconverter?base=${selectedCurrency}&quote=${key}`}>{currencyExchangeList[key].toFixed(6)}&nbsp;</Link></td>
              </tr>
            )}
          </tbody>
        </table>
    )
}