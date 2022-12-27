import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";
// import { AuthenticationContext } from "../contexts/AuthenticationProvider";
const currentUser = null;
const language = null;
const MainLayout = () => {
  // const { currentUser, language } = useContext(AuthenticationContext);
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const changeLanguage = async (type) => {
    await i18n.changeLanguage(type);
  };
  return (
    <>
      <Navbar expand="md" dark color="dark">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/">
                Components
              </Link>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {language}
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem onClick={() => changeLanguage("en")}>
                  en
                </DropdownItem>
                <DropdownItem onClick={() => changeLanguage("vi")}>
                  vn
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        {currentUser ? (
          <UncontrolledDropdown inNavbar>
            <DropdownToggle caret>Options</DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        ) : (
          <Link to="/auth/login" className="nav-link">
            <NavbarText>{t("login")}</NavbarText>
          </Link>
        )}
      </Navbar>
      <Outlet />
    </>
  );
};

export default MainLayout;
