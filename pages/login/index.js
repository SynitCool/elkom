// next
import { useRouter } from "next/router.js";

// react
import React from "react";

// classnames
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "../../src/components/Navbars/ExamplesNavbar.js";

// utils
import ApiCall from "../../utils/api-call.js";
import {
  readSessionCookies,
  sessionCookiesExist,
} from "../../utils/read-cookies.js";

// js-cookies
import Cookies from "js-cookie";

// constant
import { sessionConstant } from "../../constant/local.js";
import routes from "../../constant/routes.js";

export default function LoginPage() {
  // states
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  // handle submit states
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [terms, setTerms] = React.useState(false);

  // router
  const router = useRouter();

  React.useEffect(() => {
    if (sessionCookiesExist()) {
      router.push(routes.home);
    }

    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);

  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");

    event.preventDefault(); // 👈️ prevent page refresh

    if (!terms) {
      setError(true);
      setErrorMessage("Expected terms and conditions is checked!");
      return;
    }
    const auth = ApiCall(username, password);

    auth.then((response) => {
      if (!response.success) {
        console.log("Auth is not success!");
        console.log(response.error_message);

        setError(true);
        setErrorMessage(response.error_message);

        return;
      }

      console.log("Auth is success!");
      console.log(response.token);

      Cookies.set(sessionConstant, response.token);

      console.log("set a cookie for auth");

      router.push(routes.home);
    });

    // 👇️ access input values here
    console.log("username 👉️", username);
    console.log("password 👉️", password);
    console.log("terms 👉️", terms);

    // 👇️ clear all input values in the form
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />
                  <Card className="card-register">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src="/assets/images/square-purple-1.png"
                      />
                      <CardTitle tag="h4">Login</CardTitle>
                    </CardHeader>
                    <CardBody>
                      {error && (
                        <Card
                          style={{
                            backgroundColor: "#ff0033",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <p>{errorMessage}</p>
                        </Card>
                      )}
                      <Form className="form" onSubmit={handleSubmit}>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": emailFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="username / email"
                            type="text"
                            onChange={(event) => {
                              setError(false);
                              setUsername(event.target.value);
                            }}
                            value={username}
                            onFocus={(e) => setEmailFocus(true)}
                            onBlur={(e) => setEmailFocus(false)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": passwordFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            onChange={(event) => {
                              setError(false);
                              setPassword(event.target.value);
                            }}
                            value={password}
                            placeholder="Password"
                            type="password"
                            onFocus={(e) => setPasswordFocus(true)}
                            onBlur={(e) => setPasswordFocus(false)}
                          />
                        </InputGroup>
                        <FormGroup check className="text-left">
                          <Label check>
                            <Input
                              type="checkbox"
                              onChange={(event) => {
                                setError(false);
                                setTerms(event.target.checked);
                              }}
                              checked={terms}
                            />
                            <span className="form-check-sign" />I agree to the{" "}
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              terms and conditions
                            </a>
                            .
                          </Label>
                        </FormGroup>
                        <CardFooter>
                          <Button
                            className="btn-round"
                            color="primary"
                            size="lg"
                            type="submit"
                          >
                            Login
                          </Button>
                        </CardFooter>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
