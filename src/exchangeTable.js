

export default function ExchangeTable(props) {

    const {
        selectedCurrency,
        amount,
        currencyExchangeList
      } = props

    return (
        <table className="table table-sm bg-light mt-4">
          <thead>
            <tr>
            <th scope="col" className="pr-4 py-2">{selectedCurrency}</th>
            <th scope="col" className="pr-4 py-2">{amount} {selectedCurrency}</th>
            <th scope="col" className="pr-4 py-2">1.00 {selectedCurrency}</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(currencyExchangeList).map((key, index) =>
              <tr>
                <td className="pl-4 py-2">{key}</td>
                <td className="pl-4 py-2">{(currencyExchangeList[key] * amount)}</td> 
                <td className="pl-4 py-2">{currencyExchangeList[key]}</td>
              </tr>
            )}
          </tbody>
        </table>
    )
}
