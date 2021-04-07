import { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Keranjang from "./Keranjang";
import Product from "./Product";
import Home from "./Home";
import About from "./About";

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Washing Machine</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/product">Product</NavLink>
            </NavItem>
            <NavLink href="/keranjang">Cart</NavLink>
          </Nav>
          <NavbarText>revindaamalias</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
