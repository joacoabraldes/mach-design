
import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container className="container-lg">
           
            <Row className="align-items-center justify-content-center">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a> Mach Design </a>
                  .
                </div>
              </Col>
            
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
