// react
import React from "react";

// next
import router from "next/router";
import Head from "next/head";

// classnames
import classnames from "classnames";

// components
import HomeNavbar from "../../src/components/Navbars/HomeNavbar";

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
  Form,
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

// utils
import { getUserBaseInfo, getUserCourses } from "../../utils/function-call";
import { getSession, sessionCookiesExist } from "../../utils/read-cookies";

// constant
import routes from "../../constant/routes";

let ps = null;

export default function HomePage() {
  const [tabs, setTabs] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [userData, setUserData] = React.useState({});
  const [userCoursesData, setUserCoursesData] = React.useState([]);

  React.useEffect(() => {
    // check user login
    if (!sessionCookiesExist()) {
      router.push(routes.login);
    }

    // call function
    if (sessionCookiesExist()) {
      // get user info
      getUserBaseInfo(getSession()).then((response) => {
        setUserData(response);
        setLoading(false);
      });

      // get user courses
      getUserCourses(getSession()).then((response) => {
        setUserCoursesData(response);
      });
    }

    // other
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
        // ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);

  return (
    <>
      <Head>
        <title>Elkom - Home</title>
      </Head>
      {!loading ? <HomeNavbar /> : <div />}
      {!loading ? (
        <div className="wrapper">
          <div className="page-header">
            <img alt="..." className="dots" src="/assets/images/dots.png" />
            <img alt="..." className="path" src="/assets/images/path4.png" />
            <Container className="align-items-center">
              <Row>
                {!loading ? (
                  <Col className="ml-auto mr-auto" lg="4" md="6">
                    <Card className="card-coin card-plain">
                      <CardHeader>
                        <img
                          alt="..."
                          className="img-center img-fluid rounded-circle"
                          src={userData.userpictureurl}
                        />
                        <h4 className="title">{userData.fullname}</h4>
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
                              Info
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
                              Course
                            </NavLink>
                          </NavItem>
                        </Nav>
                        <TabContent
                          className="tab-subcategories"
                          activeTab={"tab" + tabs}
                        >
                          <TabPane tabId="tab1">
                            <Row>
                              <Label sm="3">First Name</Label>
                              <Label sm="3">{userData.firstname}</Label>
                              <Label sm="3">Last Name</Label>
                              <Label sm="3">{userData.lastname}</Label>
                            </Row>
                            <Row>
                              <Label sm="3">Login With Account</Label>
                              <Label sm="3">{userData.sitename}</Label>
                              <Label sm="3">User Id</Label>
                              <Label sm="3">{userData.userid}</Label>
                            </Row>
                          </TabPane>
                          <TabPane tabId="tab2">
                            {userCoursesData.map((value, index, arr) => (
                              <Card className="card-plain" key={index}>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <CardHeader>
                                  <Row className="justify-content-between align-items-center">
                                    <UncontrolledCarousel
                                      controls={false}
                                      indicators={false}
                                      items={[
                                        {
                                          src: value.courseimage,
                                          altText: "course_image",
                                          caption: "",
                                        },
                                      ]}
                                    />
                                  </Row>
                                  <h4>{value.fullnamedisplay}</h4>
                                  {/* <Row>
                                  <Label sm="3">Course Category</Label>
                                  <Label sm="3">{value.coursecategory}</Label>
                                  <Label sm="3">Course Id</Label>
                                  <Label sm="3">{value.id}</Label>
                                </Row>
                                <Row>
                                  <Label sm="3">Progress</Label>
                                  <Label sm="3">{value.progress}</Label>
                                  <Label sm="3">Time Access</Label>
                                  <Label sm="3">
                                    {value.timeaccess.toString()}
                                  </Label>
                                </Row>
                                <Row>
                                  <Label sm="3">Start Date</Label>
                                  <Label sm="3">
                                    {value.startdate.toString()}
                                  </Label>
                                  <Label sm="3">End Date</Label>
                                  <Label sm="3">
                                    {value.enddate.toString()}
                                  </Label>
                                </Row> */}
                                </CardHeader>
                              </Card>
                            ))}
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Col>
                ) : (
                  <div></div>
                )}
              </Row>
            </Container>
          </div>
        </div>
      ) : (
        <div />
      )}
    </>
  );
}
