import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Layout = () => {
    return (
        <>
        <Nav variant="tabs" defaultActiveKey="/home"  className="bg-dark text-light">
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
        </>
    )
}

export default Layout
