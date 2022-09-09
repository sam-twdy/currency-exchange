import CurrencyRow from './currencyRow';
import ValueRow from './valueRow';
import ad from './ldplayer_banner.jpeg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CurrencyExchange() {

    return (
        <div className='configure-wrapper'>
        <div className='linebreak'/>
        <Row className='row header-gap'>
          <Col lg={3} className='config'>
            <div className='linebreak'/>
            <div className='config-title'>Currency Converter</div>
            <ValueRow />
            <div className='display-container'>
            <CurrencyRow />
            </div>
            <div className='linebreak'/>
          </Col>
          <Col lg={5} className=''>
            <div className='exchange-table'>Currency Exchange Rates</div>
          </Col>
          <Col className='d-none d-xl-block ad'>
            <a href='https://www.youtube.com/watch?v=mwKsOIzScV8' target="_blank" rel="noreferrer noopener">
            <img src={ad} alt="Try Epic 7 Today!"/>
            </a>
          </Col>
        </Row>
      </div> 
    )
}