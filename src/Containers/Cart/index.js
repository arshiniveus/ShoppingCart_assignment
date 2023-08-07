
import { Button, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap';

import React, { useEffect, useState } from 'react'
import CartCard from "../../components/CartCard"
import Header from '../../components/Header';
import { useNavigate } from 'react-router';


export default function Index () {
  const navigate = useNavigate();
  const [ Cart, setCart ] = useState(localStorage.getItem('CartData') ? JSON.parse(localStorage.getItem('CartData')) : []);

  const [ AddedtoCart, setAddedtoCart ] = useState(false);

  const [ inputText, setInputText ] = useState("");

  const [ show, setShow ] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const moveTosuccess = () => {
    navigate('/success')
  }

  const BuyNow = (props) => {
    return (

      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delivery Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="number"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="dark" onClick={moveTosuccess}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    );

  }


  useEffect(() => {
    if (!localStorage.getItem('loginData')) {
      return navigate("/login")
    }
  }, [])


  let inputHandler = (e) => {
    console.log("reached", e.target.value);
    var lowerCase = e.target.value
    setInputText(lowerCase);
  };

  const filteredData = Cart.filter((el) => {
    //if no input the return the original
    if (inputText === '') {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.title.toLowerCase().includes(inputText)
    }
  })
  console.log({ filteredData });


  const HandleCart = (item, index) => {

    setAddedtoCart(!AddedtoCart);
    const whislisted = Cart.findIndex((val) => {
      return val.id === item.id
    })
    const containsItem = !!Cart.find(val => {
      return val.id === item.id
    })
    if (containsItem === false) {
      const cartdata = [ ...Cart, item ];
      setCart(Cart);
      localStorage.setItem('CartData', JSON.stringify(cartdata));
    } else {
      Cart.splice(whislisted, 1);
      localStorage.setItem('CartData', JSON.stringify(Cart));
    }
  }



  console.log("cartdata", Cart);

  return (

    <div className='App'>
      <Header inputText={inputText} inputHandler={(e) => inputHandler(e)} />
      <Container>
        <Table style={{ margin: "5%" }} >
          <thead className='Details' >
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th className="justify-align-center">Quantity</th>
              <th>Total</th>
              <th></th>
              <th></th>

            </tr>
          </thead>

          {filteredData.map((item, index) => {
            return <tbody >

              <CartCard
                AddedtoCart={!AddedtoCart}
                url={item.thumbnail}
                Price={item.price}
                handleShow={handleShow}
                handleWishlist={() => HandleCart(item)}

              />


            </tbody>
          })}


        </Table>



      </Container>
      <BuyNow show={show} />
    </div>

  )

}
