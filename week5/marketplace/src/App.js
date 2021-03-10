import React, { Component } from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Background from '../src/assets/Home.jpg';
import { Navbar, Nav } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div class="container-fluid bg-dark">
          <div className="row">
            <div className="col-md-12">
              <Navbar bg="light" variant="light" expand="lg" sticky="top">
                <Navbar.Brand href="#home" >The Little Thing She Need</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav.Link href="#"></Nav.Link>
                  <Nav>
                    <Link to="/">Home</Link>
                  </Nav>
                  <Nav.Link href="#"></Nav.Link>
                  <Nav>
                    <Link to="/private">Category</Link>
                  </Nav>

                  <Nav.Link href="#"></Nav.Link>
                </Navbar.Collapse>
              </Navbar>
              <br />
            </div>
          </div>

          {/* <div className="row">
            <div className="col-md-12 bg-danger">
              <div class="text-center">
                <h2>Shopping and Retail</h2>
              </div>
            </div>
          </div> */}

          <Switch>
            <Route exact path="/">
              <div className="row">
                <div className="col-md-12 bg-danger">
                  <br />
                  <AuthButton />
                  <Start />
                </div>
              </div>
            </Route>
            <Route path="/home">
              <div className="row">
                <div className="col-md-12 bg-danger">
                  <br />
                  <AuthButton />
                  <Home />
                </div>
              </div>
            </Route>
            <Route path="/OSM">
              <div className="row">
                <div className="col-md-12 bg-danger">
                  <br />
                  <AuthButton />
                  <OvalShortMatte />
                </div>
              </div>
            </Route>
            <Route path="/NSG">
              <div className="row">
                <div className="col-md-12 bg-danger">
                  <br />
                  <AuthButton />
                  <NaturalShortGlossy />
                </div>
              </div>
            </Route>
            <Route path="/login">
              <div className="row">
                <div className="col-md-12 bg-danger">
                  <br />
                  <LoginPage />
                </div>
              </div>
            </Route>
            <PrivateRoute path="/private">
              <div className="row">
                <div className="col-md-12 bg-danger">
                  <br />
                  <AuthButton />
                  <ProtectedPage />
                </div>
              </div>
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    );

    function PrivateRoute({ children, ...rest }) {
      return (
        <Route
          {...rest}
          render={({ location }) =>
            fakeAuth.isAuthenticated ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location },
                }}
              />
            )
          }
        />
      );
    }

    function LoginPage() {
      let history = useHistory();
      let location = useLocation();

      let { from } = location.state || { from: { pathname: "/" } };
      let login = () => {
        fakeAuth.authenticate(() => {
          history.replace(from);
        });
      };

      return (
        <div>
          <p>Please Log In To See Our Catalog </p>
          <button onClick={login}>Log in</button>
          <br></br>
          <br></br>
        </div>
      );
    }

    function ProtectedPage() {
      return (
        <div>
          <div className="row">
            <div className="col-md-12">
              <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/home">Home</Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/OSM">Oval Short Matte</Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/NSG">Natural Short Glossy</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
          <br></br>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="NSG/dark_green_.jpg"
                  width="422"
                />
                <h2 className="title1"> Dark Green </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="NSG/light_blue_.jpg"
                  width="422"
                />
                <h2 className="title1"> Light Blue </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                {" "}
                <img
                  src="NSG/light_grey_.jpg"
                  width="422"
                />
                <h2 className="title1"> Light Grey </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="OSM/mulberry_.jpg"
                  width="422"
                />
                <h2 className="title1"> Mulberry </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="OSM/cheese_1.jpg"
                  width="422"
                />
                <h2 className="title1"> Cheese </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="OSM/deep_coffee_.jpg"
                  width="422"
                />
                <h2 className="title1"> Deep Coffee </h2>
              </div>
            </Grid>
          </Grid>
        </div>
      );
    }

    function Start() {
      return (
        <div>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="NSG/dark_green_.jpg"
                  width="422"
                />
                <h2 className="title1"> Dark Green </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="NSG/light_blue_.jpg"
                  width="422"
                />
                <h2 className="title1"> Light Blue </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                {" "}
                <img
                  src="NSG/light_grey_.jpg"
                  width="422"
                />
                <h2 className="title1"> Light Grey </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="OSM/mulberry_.jpg"
                  width="422"
                />
                <h2 className="title1"> Mulberry </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="OSM/cheese_1.jpg"
                  width="422"
                />
                <h2 className="title1"> Cheese </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="OSM/deep_coffee_.jpg"
                  width="422"
                />
                <h2 className="title1"> Deep Coffee </h2>
              </div>
            </Grid>
          </Grid>
        </div>
      );
    }

    function Home() {
      return (
        <div>
          <div className="row">
            <div className="col-md-12">
              <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/home">Home</Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/OSM">Oval Short Matte</Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/NSG">Natural Short Glossy</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
          <br></br>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="NSG/dark_green_.jpg"
                  width="422"
                />
                <h2 className="title1"> Dark Green </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="NSG/light_blue_.jpg"
                  width="422"
                />
                <h2 className="title1"> Light Blue </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                {" "}
                <img
                  src="NSG/light_grey_.jpg"
                  width="422"
                />
                <h2 className="title1"> Light Grey </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="OSM/mulberry_.jpg"
                  width="422"
                />
                <h2 className="title1"> Mulberry </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="OSM/cheese_1.jpg"
                  width="422"
                />
                <h2 className="title1"> Cheese </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="OSM/deep_coffee_.jpg"
                  width="422"
                />
                <h2 className="title1"> Deep Coffee </h2>
              </div>
            </Grid>
          </Grid>
        </div>
      );
    }

    function NaturalShortGlossy() {
      return (
        <div>
          <div className="row">
            <div className="col-md-12">
              <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/home">Home</Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/OSM">Oval Short Matte</Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/NSG">Natural Short Glossy</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
          <br></br>
          <Grid container spacing={3}>
          <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="NSG/dark_green_.jpg"
                  width="422"
                />
                <h2 className="title1"> Dark Green </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="NSG/light_blue_.jpg"
                  width="422"
                />
                <h2 className="title1"> Light Blue </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                {" "}
                <img
                  src="NSG/light_grey_.jpg"
                  width="422"
                />
                <h2 className="title1"> Light Grey </h2>
              </div>
            </Grid>
          </Grid>
        </div>
      );
    }

    function OvalShortMatte() {
      return (
        <div>
          <div className="row">
            <div className="col-md-12">
              <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/home">Home</Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/OSM">Oval Short Matte</Link>
                    <Nav.Link href="#"></Nav.Link>
                    <Link to="/NSG">Natural Short Glossy</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
          <br></br>
          <Grid container spacing={3}>
          <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="OSM/cheese_1.jpg"
                  width="422"
                />
                <h2 className="title1"> Cheese </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="OSM/deep_coffee_.jpg"
                  width="422"
                />
                <h2 className="title1"> Deep Coffee </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{background: `url(${Background})`,}}>
                <img
                  src="OSM/mulberry_.jpg"
                  width="422"
                />
                <h2 className="title1"> Mulberry </h2>
              </div>
            </Grid>
          </Grid>
        </div>
      );
    }

    function AuthButton() {
      let history = useHistory();

      return fakeAuth.isAuthenticated ? (
        <p>
          Welcome!{" "}
          <button
            onClick={() => {
              fakeAuth.signout(() => history.push("/"));
            }}
          >
            Sign Out
          </button>
        </p>
      ) : (
        <p>You are not logged in</p>
      );
    }
  }
}
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};
export default App;