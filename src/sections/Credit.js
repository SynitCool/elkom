/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// next
import Image from "next/image";

import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

let ps = null;

const carouselItems = [
  {
    src: "/assets/img/denys.jpg",
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: "/assets/img/fabien-bazanegue.jpg",
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: "/assets/img/mark-finn.jpg",
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

export default function Credit() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          <Image alt="..." className="dots" src="/assets/img/dots.png" />
          <Image alt="..." className="path" src="/assets/img/path4.png" />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">Mike Scheinder</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                  Offices parties lasting outward nothing age few resolve.
                  Impression to discretion understood to we interested he
                  excellence. Him remarkably use projection collecting. Going
                  about eat forty world has round miles.
                </p>
                <div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round"
                    color="twitter"
                    href="https://twitter.com/creativetim"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip639225725">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="facebook"
                    href="https://www.facebook.com/creativetim"
                    id="tooltip982846143"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip982846143">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="dribbble"
                    href="https://dribbble.com/creativetim"
                    id="tooltip951161185"
                    target="_blank"
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip951161185">
                    Follow us
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <Image
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src="/assets/img/mike.jpg"
                    />
                    <h4 className="title">Transactions</h4>
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          Wallet
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#pablo"
                        >
                          Send
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#pablo"
                        >
                          News
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">COIN</th>
                              <th className="header">AMOUNT</th>
                              <th className="header">VALUE</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>BTC</td>
                              <td>7.342</td>
                              <td>48,870.75 USD</td>
                            </tr>
                            <tr>
                              <td>ETH</td>
                              <td>30.737</td>
                              <td>64,53.30 USD</td>
                            </tr>
                            <tr>
                              <td>XRP</td>
                              <td>19.242</td>
                              <td>18,354.96 USD</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="tab2">
                        <Row>
                          <Label sm="3">Pay to</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input
                                placeholder="e.g. 1Nasd92348hU984353hfid"
                                type="text"
                              />
                              <FormText color="default" tag="span">
                                Please enter a valid address.
                              </FormText>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Label sm="3">Amount</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input placeholder="1.587" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className="btn-simple btn-icon btn-round float-right"
                          color="primary"
                          type="submit"
                        >
                          <i className="tim-icons icon-send" />
                        </Button>
                      </TabPane>
                      <TabPane tabId="tab3">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Latest Crypto News</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>The Daily: Nexo to Pay on Stable...</td>
                            </tr>
                            <tr>
                              <td>Venezuela Begins Public of Nation...</td>
                            </tr>
                            <tr>
                              <td>PR: BitCanna – Dutch Blockchain...</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Projects</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                  An artist of considerable range, Ryan — the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure. An artist of
                  considerable range.
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-book-bookmark" /> Bookmark
                  </Button>
                  <Button
                    className="btn-simple"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Check it!
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
