import CurrencyRow from './currencyRow';
import ValueRow from './valueRow';

export default function Config() {
    return (
        <div class='configure-wrapper'>
        <div class='row header-gap'>
        <div class='linebreak'/>
        <div class='col-1'>
          </div>
          <div class='col config'>
          <div class='linebreak'/>
            <div class='config-title'>Currency Converter</div>
            <ValueRow />
            <CurrencyRow />
            <div class='linebreak'/>
          </div>
          <div class='col-1'>
          </div>
          <div class='col-5'>
            <h1>Currency Exchange Rates</h1>
          </div>
          <div class='col'>
            <h1>Blank</h1>
          </div>
        </div>
      </div> 
    )
}