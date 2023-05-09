import React from "react";
import classnames from "classnames";
import "./Landing.css";

import arrayImagenes from "../../data"
import Gallery from "components/Gallery";
import ImageGrid from "components/ImageGrid";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";
import logo from "../../assets/img/mach-design/logo.png";

class Construccion extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  scrollToMuebleriaSection = () => {
    const section = document.getElementById("muebleria-section");
    section.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <>
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250 wood-background">
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="12" className="opacid">
                      <img
                        alt="..."
                        src={logo}
                        width="55%"
                        className=" img-center img-fluid shadow shadow-lg--hover "
                      />
                    </Col>
                    <Col lg="12" className="facha-text mt-5">
                      <h1 className="display-3 text-white textito">
                        <p className="facha-text">Muebleria - Diseño - Publicidad </p>
                      </h1>
                      <p className="lead text-white facha-text">
                        Somos una empresa dedicada al diseño y fabricacion de
                        equipamentos y mobiliarios
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg" id="muebleria-section">
            <Container>
              <Row className="row-grid align-items-center p-5">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle align-items-center mr-5">
                      <i class="ni ni-settings"></i>
              </div>
              <h1>EN CONSTRUCCION</h1>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Construccion;
