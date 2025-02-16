import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { auth } from '../../Firebaseconfig';
import { logoutUser } from '../../Services/Action/Authlogout';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    swal({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      buttons: ["Cancel", "Logout"],
      dangerMode: true,
    }).then(async (willLogout) => {
      if (willLogout) {
        try {
          await auth.signOut();
          dispatch(logoutUser());
          swal("Logged out successfully!", {
            icon: "success",
          }).then(() => {
            navigate('/login');
          });
        } catch (error) {
          console.error('Error logging out:', error);
          swal("Failed to logout!", "Please try again later.", "error");
        }
      } else {
        swal("Logout canceled!");
      }
    });
  };
  return (
    <>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#">ZwiGato<Button className='bt1 m-3'> <i class="fa-solid fa-location-dot"></i> Location</Button></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to={"/"} className='text-white'>Home</Nav.Link>
                <NavDropdown title="order" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to={"/Resturant-listing"}>
                    Resturentlisting
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/Menu-grid"}>
                    Menu Grid
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Blog" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Comingsoon</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pages" className='text-white' id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action5">
                    <NavDropdown.Item as={Link} to={"/Whislesheet"} >
                      Whislesheet
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/error"} >
                      404
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/Empty-cart"}>
                      Empty-cart
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/Otp"}>
                      Otp
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/Faq"}>
                      Faq
                    </NavDropdown.Item>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={"/contact"} className='text-white'>Contact</Nav.Link>
              </Nav>
              <div className='icon text-white'>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <div className='profile d-flex jusify-content-center align-items-center'>
                <div className='p-3'>
                  <img src=".\images\20230620_095708.png" alt="profile-img" />
                </div>
                <div>

                  <Dropdown>
                    <Dropdown.Toggle >
                      <p> <span>Hi , bhargav pandya</span> <br />
                        My Account</p>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" className='d-flex align-items-center' onClick={handleLogout}><i class="fa-regular fa-circle-left px-2"></i>Log out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header