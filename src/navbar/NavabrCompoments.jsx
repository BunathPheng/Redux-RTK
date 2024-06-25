import { Button, Navbar } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
export default function ComponentNavbar() {
  const items = useSelector((state) => state.conterReducer.values);
  const location = useLocation();
  console.log("location: ", location);
  const pathname = location?.pathname;
  console.log("pathname: ", pathname);
  const [navbarlist, setnavbarlist] = useState([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Product", path: "/product" },
    { name: "About Us", path: "/about-us" },
    { name: "Count", path: "/count" },
  ]);
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {navbarlist.map((item, index) => {
          return (
            <Navbar.Link
              key={index}
              as={Link}
              to={item.path}
              active={pathname === item.path}
            >
              {item.name}
            </Navbar.Link>
          );
        })}
        <h1>{items}</h1>
      </Navbar.Collapse>
    </Navbar>
  );
}
