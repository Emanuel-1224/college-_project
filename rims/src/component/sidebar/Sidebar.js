import { Accordion, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaInfoCircle, FaQuestion, FaRegLightbulb, FaShareAlt } from "react-icons/fa";
import { FaGears, FaLocationDot, FaRegHandshake } from "react-icons/fa6";
import { FcBusinessman } from "react-icons/fc";
import { MdNoteAlt } from "react-icons/md";
import rimslogo from '../../images/rims-logo.webp';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <>
    <Navbar className='abc' collapseOnSelect expand="xs">
      <Navbar.Brand>
        <img className='logo1' src={rimslogo} alt='img'></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>Features</Nav.Link>
          <Nav.Link>Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link>More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className='over'>
    <Accordion className='accord-body'>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='accord-head'><span><FcBusinessman /> &nbsp;&nbsp; </span>About My Institute</Accordion.Header>
        <Accordion.Body>
          <div className='list-items'>item1</div>
          <div className='list-items'>item2</div>
        </Accordion.Body>
      </Accordion.Item>
      <div className='item'><span><MdNoteAlt /> &nbsp;&nbsp; </span>Manage Activity</div>
      {/* <Accordion.Item eventKey="1">
        <Accordion.Header className='accord-head'><span><MdNoteAlt /> &nbsp;&nbsp; </span></Accordion.Header>
        <Accordion.Body>
          <div className='list-items'>item1</div>
          <div className='list-items'>item2</div>
        </Accordion.Body>
      </Accordion.Item> */}
      <Accordion.Item eventKey="2">
        <Accordion.Header className='accord-head'><span><FaGears /> &nbsp;&nbsp; </span>R & D / Climate Cell</Accordion.Header>
        <Accordion.Body>
          <div className='list-items'>item1</div>
          <div className='list-items'>item2</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className='accord-head'><span><FaRegHandshake /> &nbsp;&nbsp; </span>Handholding And Capacity Development</Accordion.Header>
        <Accordion.Body>
          <div className='list-items'>item1</div>
          <div className='list-items'>item2</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className='accord-head'><span><FaRegLightbulb /> &nbsp;&nbsp; </span>IPR, Innovation And Startup</Accordion.Header>
        <Accordion.Body>
          <div className='list-items'>item1</div>
          <div className='list-items'>item2</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header className='accord-head'><span><FaShareAlt /> &nbsp;&nbsp; </span>Referral And Linkage</Accordion.Header>
        <Accordion.Body>
          <div className='list-items'>item1</div>
          <div className='list-items'>item2</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header className='accord-head'><span><FaQuestion /> &nbsp;&nbsp; </span>Help Desk</Accordion.Header>
        <Accordion.Body>
          <div className='list-items'>item1</div>
          <div className='list-items'>item2</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header className='accord-head'><span><FaInfoCircle /> &nbsp;&nbsp; </span>Information Dissemination</Accordion.Header>
        <Accordion.Body>
          <div className='list-items'>item1</div>
          <div className='list-items'>item2</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header className='accord-head'><span><FaInfoCircle /> &nbsp;&nbsp; </span>Convergence</Accordion.Header>
        <Accordion.Body>
          <div className='list-items'>item1</div>
          <div className='list-items'>item2</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header className='accord-head'><span><FaLocationDot /> &nbsp;&nbsp; </span>Contact us</Accordion.Header>
        <Accordion.Body>
          <div className='list-items'>item1</div>
          <div className='list-items'>item2</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header className='accord-head'><span><MdNoteAlt /> &nbsp;&nbsp; </span>Accordion Item #11</Accordion.Header>
        <Accordion.Body>
          <div className='list-items'>item1</div>
          <div className='list-items'>item2</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11">
        <Accordion.Header className='accord-head'><span><MdNoteAlt /> &nbsp;&nbsp; </span>Accordion Item #12</Accordion.Header>
        <Accordion.Body>
          <div className='list-items'>item1</div>
          <div className='list-items'>item2</div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </> 
  )
}

