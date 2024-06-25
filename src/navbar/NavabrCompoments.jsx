import { Button, Navbar } from "flowbite-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function ComponentNavbar() {
  const items = useSelector((state) => state.conterReducer.values);
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
        <Navbar.Link as={Link} to="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/services">
          Services
        </Navbar.Link>
        <Navbar.Link as={Link} to="/product">
          Product
        </Navbar.Link>
        <Navbar.Link as={Link} to={"/about-us"}>
          About Us
        </Navbar.Link>
        <h1>{items}</h1>
      </Navbar.Collapse>
    </Navbar>
  );
}
