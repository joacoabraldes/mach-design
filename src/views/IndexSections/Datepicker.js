/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";


// reactstrap components
import {
  FormGroup,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Datepicker extends React.Component {
  state = {};
  handleReactDatetimeChange = (who, date) => {
    if (
      this.state.startDate &&
      who === "endDate" &&
      new Date(this.state.startDate._d + "") > new Date(date._d + "")
    ) {
      this.setState({
        startDate: date,
        endDate: date
      });
    } else if (
      this.state.endDate &&
      who === "startDate" &&
      new Date(this.state.endDate._d + "") < new Date(date._d + "")
    ) {
      this.setState({
        startDate: date,
        endDate: date
      });
    } else {
      this.setState({
        [who]: date
      });
    }
  };
  // this function adds on the day tag of the date picker
  // middle-date className which means that this day will have no border radius
  // start-date className which means that this day will only have left border radius
  // end-date className which means that this day will only have right border radius
  // this way, the selected dates will look nice and will only be rounded at the ends
  getClassNameReactDatetimeDays = (date) => {
    if (this.state.startDate && this.state.endDate) {
    }
    if (
      this.state.startDate &&
      this.state.endDate &&
      this.state.startDate._d + "" !== this.state.endDate._d + ""
    ) {
      if (
        new Date(this.state.endDate._d + "") > new Date(date._d + "") &&
        new Date(this.state.startDate._d + "") < new Date(date._d + "")
      ) {
        return " middle-date";
      }
      if (this.state.endDate._d + "" === date._d + "") {
        return " end-date";
      }
      if (this.state.startDate._d + "" === date._d + "") {
        return " start-date";
      }
    }
    return "";
  };
  render() {
    return (
      <>
        <h3 className="h4 text-success font-weight-bold mt-md mb-4">
          Datepicker
        </h3>
        <Row>
          <Col md="4">
            <small className="d-block text-uppercase font-weight-bold mb-3">
              Single date
            </small>
            <FormGroup>
              <InputGroup>
                  <InputGroupText>
                    <i className="ni ni-calendar-grid-58" />
                  </InputGroupText>

              </InputGroup>
            </FormGroup>
          </Col>
          <Col className="mt-4 mt-md-0" md="8">
            <small className="d-block text-uppercase font-weight-bold mb-3">
              Date range
            </small>
            <Row>
              <Col sm={6} xs={12}>
                <FormGroup>
                  <InputGroup>
               
                      <InputGroupText>
                        <i className="ni ni-calendar-grid-58" />
                      </InputGroupText>
        

                  </InputGroup>
                </FormGroup>
              </Col>
              <Col sm={6} xs={12}>
                <FormGroup>
                  <InputGroup>
                      <InputGroupText>
                        <i className="ni ni-calendar-grid-58" />
                      </InputGroupText>
                 
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default Datepicker;
