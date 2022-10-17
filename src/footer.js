import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Footer() {

        return (
    <footer>
        <Row className='footer-wrapper'>
        <div className='linebreak'/>
            <Col lg={9} className="footer-left d-none d-lg-block">
                <div>2022 © Samuel Tweedy</div>
            </Col>
            <Col lg={9} className="footer-center d-md-block d-lg-none">
                <div>2022 © Samuel Tweedy</div>
            </Col>
            <Col className="footer-right">
                <div><a href='https://github.com/sam-twdy'>GitHub</a></div>
            </Col>
            <Col className="footer-divide d-none d-lg-block">
                <div> | </div>
            </Col>
            <Col className="footer-divide2 d-md-block d-lg-none">
                <div> | </div>
            </Col>
            <Col className="footer-right2">
                <div><a href='https://www.linkedin.com/in/samuel-tweedy-6a5a0b227/'>LinkedIn</a></div>
            </Col>
        </Row>
    </footer>
    )
}