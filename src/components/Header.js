import React, { useEffect } from 'react';
import { Container, Navbar, DropdownButton, Dropdown, Form, Button } from 'react-bootstrap';
import { BsFillCartFill, BsSuitHeartFill } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';


const Header = (props) => {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem('loginData');
    navigate('/login');


  }

  useEffect(() => {
    console.log("inside useeffect");





  });



  return (
    <Navbar expand="lg-md-sm" bg="dark" variant="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="text-white">
          <Navbar.Text className='login text-white'>
            <NavLink
              to={`/`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "active"
                  : isPending
                    ? "pending"
                    : ""
              }
            >
              Shopping Cart
            </NavLink>
          </Navbar.Text></Navbar.Brand>
        <Navbar.Text className='search' >
          <Form.Control size="sm" type="text" className='m-auto' value={props.inputText} onChange={props.inputHandler} placeholder="search Product" />
        </Navbar.Text>
        <Navbar.Text className='login text-white'>
          <NavLink
            to={`/`}
            className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                  ? "pending"
                  : ""
            }
          >
            Home
          </NavLink>
        </Navbar.Text>


        <Navbar.Text className='Cart text-white'>
          <NavLink
            to={`/wishlist`}
            className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                  ? "pending"
                  : ""
            }
          >
            <BsSuitHeartFill />



          </NavLink>
        </Navbar.Text>




        <Navbar.Text className='Cart text-white'>
          <NavLink
            to={`/cart`}
            className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                  ? "pending"
                  : ""
            }
          >
            <BsFillCartFill />

          </NavLink>
        </Navbar.Text>

        {localStorage.getItem('loginData') ?
          <DropdownButton id="dropdown-basic-button" className="mt-3" variant='outline-light' title={localStorage.getItem('loginData') ? `Hi, Arshiya` : 'Login'}>

            <Dropdown.Item onClick={() => Logout()}>Logout
            </Dropdown.Item>
          </DropdownButton> :
          <Button variant='dark'>
            <Navbar.Text className='login text-white'>
              <NavLink
                to={`/login`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                      ? "pending"
                      : ""
                }
              >
                Login
              </NavLink>
            </Navbar.Text>
          </Button>
        }
      </Container>
    </Navbar>





  )

}

export default Header
