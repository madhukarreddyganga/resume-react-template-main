import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Service from "../../pages/Service/Service";
import Qualification from "../../pages/Qualification/Qualification.jsx";

const navbarData = [
  {
    id: 1,
    title: "About",
    to: "/about",
  },
  {
    id: 2,
    title: "Services",
    to: "/services",
  },
  {
    id: 3,
    title: "Experience",
    to: "/Portfolio",
  },
  {
    id: 6,
    title: "Education Details",
    to: "/Qualification",
  },
  {
    id: 5,
    title: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  return (
    <Router>
      <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded font-serif">
        <ul className="flex flex-wrap">
          {navbarData.map((el, id) => (
            <LinkItem el={el} key={id} />
          ))}
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/services">
          <Service />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Qualification">
          <Qualification />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;

const LinkItem = (props) => {
  const { title, to } = props.el;
  return (
    <li className="m-3 lg:mx-5">
      <NavLink
        to={to}
        activeClassName="text-purple-600"
        className="text-gray-800 text-medium hover:text-purple-600"
      >
        {title}
      </NavLink>
    </li>
  );
};
