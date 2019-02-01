import React, { Component } from "react";
// import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
// import Collapse from "react-bootstrap/Collapse";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Collapse } from "reactstrap";
import axios from "axios";
import { Chart } from "react-google-charts";

// Network
var instance = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://techtrek-api-gateway.cfapps.io/",
  headers: {
    identity: "O5",
    token: "bf38d9ac-fade-40ef-b7d2-eabdb183acce",
    Origin: "https://techtrek-api-gateway.cfapps.io"
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.handleShow1 = this.handleShow1.bind(this);
    this.handleClose1 = this.handleClose1.bind(this);
    this.handleShow2 = this.handleShow2.bind(this);
    this.handleClose2 = this.handleClose2.bind(this);
    this.handleShow3 = this.handleShow3.bind(this);
    this.handleClose3 = this.handleClose3.bind(this);

    this.state = {
      show1: true,
      show2: false,
      show3: false,
      value: "",
      suggestions: []
    };
  }
  handleClose1() {
    this.setState({ show1: false });
  }
  handleShow1() {
    this.setState({ show1: true });
  }
  handleClose2() {
    this.setState({ show2: false });
  }
  handleShow2() {
    this.setState({ show2: true });
  }
  handleClose3() {
    this.setState({ show3: false });
  }
  handleShow3() {
    this.setState({ show3: true });
  }

  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossorigin="anonymous"
        />

        <Navbar>
          <Navbar.Brand href="#home">DBS</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#">UserInfo</Nav.Link>
            <Nav.Link href="#features">LogOut</Nav.Link>
          </Nav>
        </Navbar>
        <h1> </h1>
        <Button onClick={this.handleShow1}>Open</Button>
        <Button onClick={this.handleClose1}>Close</Button>
        <Collapse isOpen={this.state.show1}>
          <Card>
            <Chart
              chartType="BarChart"
              data={[
                [
                  "Month",
                  "Deposit - 588967151",
                  "Credit - 1234-2345-3456-4567",
                  "Credit - 1111-2222-3333-4444"
                ],
                ["Oct", 5121, 1322, 100],
                ["Nov", 5217, 1322, 200],
                ["Dec", 5646, 1322, 300]
              ]}
              width="100%"
              height="400px"
              legendToggle
            />
          </Card>
        </Collapse>
        <Button onClick={this.handleShow2}>Open</Button>
        <Button onClick={this.handleClose2}>Close</Button>
        <Collapse isOpen={this.state.show2}>
          <CardColumns>
            <Card>
              <Card.Img
                width="100px"
                height="360px"
                variant="top"
                src="https://www.bankingtech.com/files/2016/07/DBS_Bank.jpg"
              />
              <Card.Body>
                <Card.Title>Bank</Card.Title>
                <Card.Text>
                  At a Glance Now, it's even easier to access your favourite key
                  features on PayLah!
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Scan and PayLah! when you eat at selected hawker centres, ride
                  with Comfort/CityCab and shop at your favourite stores with
                  the PayLah! QR or NETS QR function.
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted" />
                </footer>
              </blockquote>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                width="100px"
                height="160px"
                src="https://goo.gl/images/4GBesp"
              />
              <Card.Body>
                <Card.Title>Cards</Card.Title>
                <Card.Text>DBS Live Fresh Card</Card.Text>
              </Card.Body>
              <Card.Footer />
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Don’t have a DBS Live Fresh Card? Apply now and automatically
                  enjoy double the chances to win with every S$50 spend.
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted" />
                </footer>
              </blockquote>
            </Card>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Insure</Card.Title>
                <Card.Text>
                  Insurance Home & Car Car Car Insurance Get instant quotes from
                  3 trusted insurers
                </Card.Text>
                <Card.Text />
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                width="100px"
                height="160px"
                src="https://goo.gl/images/fKyUuG"
              />
            </Card>
            <Card className="text-right">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  When it comes to car insurance, we have different needs. That
                  is why we have brought in two new partners, DirectAsia and
                  Tokio Marine, to give you even more options. Compare quotes
                  from Income, DirectAsia and Tokio Marine, Singapore’s trusted
                  car insurers. Pick what best suits your needs. Then buy the
                  policy online in minutes - it’s that easy.
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted" />
                </footer>
              </blockquote>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Borrow</Card.Title>
                <Card.Text>Buy or rent a home</Card.Text>
                <Card.Text>
                  Let’s work out the sums together and we will show you the
                  properties that meet your needs. If not, you could also start
                  browsing to get an inspiration. The Choice is Yours.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
        </Collapse>
        <div />
        <Button onClick={this.handleShow3}>Open</Button>
        <Button onClick={this.handleClose3}>Close</Button>
        <Collapse isOpen={this.state.show3}>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Collapse>
      </div>
    );
  }
}

export default App;
