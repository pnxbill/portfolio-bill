
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const AppLink = ({ children, className, href }) =>
  <Link href={href}>
    <a className={`mr-3 ${className || ""}`}>{children}</a>
  </Link>

const AppNavbar = () => {

  return (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="navbar-dark fj-mw9">

        <AppLink href="/" className="navbar-brand font-weight-bold">
          Bill Marques
        </AppLink>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <AppLink href="/portfolios" className="nav-link">Portfolios</AppLink>
            <AppLink href="/forum/categories" className="nav-link">Forum</AppLink>
            <AppLink href="/cv" className="nav-link">CV</AppLink>
          </Nav>
          <Nav>
            <AppLink href="/login" className="nav-link">Sign In</AppLink>
            <AppLink
              href="/register"
              className="nav-link btn btn-success bg-green-2 bright"
            >
              Sign Up
            </AppLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default AppNavbar;