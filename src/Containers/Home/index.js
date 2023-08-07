
import Header from '../../components/Header';
import Card from '../../components/Cards';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';



function Index () {
  const [ Product, setProduct ] = useState([]);
  const [ WishlistToggle, setWishlistToggle ] = useState(false);
  const [ Wishlist, setWishlist ] = useState(localStorage.getItem('Wishdata') ? JSON.parse(localStorage.getItem('Wishdata')) : []);

  const [ Cart, setCart ] = useState(localStorage.getItem('CartData') ? JSON.parse(localStorage.getItem('CartData')) : []);
  const [ AddedtoCart, setAddedtoCart ] = useState(false);

  const [ inputText, setInputText ] = useState("");

  const navigate = useNavigate();



  let inputHandler = (e) => {
    console.log("reached", e.target.value);
    var lowerCase = e.target.value
    setInputText(lowerCase);
  };

  const filteredData = Product.filter((el) => {
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

  //AddtoCart
  const HandleCart = (item, index) => {
    alert("Added to cart Successfully");

    setAddedtoCart(!AddedtoCart);
    const AddtoCart = Cart.findIndex((val) => {
      return val.id === item.id
    })
    const containsItem = !!Cart.find(val => {
      return val.id === item.id
    })
    if (containsItem === false) {
      const cartData = [ ...Cart, item ];
      setCart(cartData);
      localStorage.setItem('CartData', JSON.stringify(cartData));
    } else {
      Cart.splice(AddtoCart, 1);
      localStorage.setItem('CartData', JSON.stringify(Cart));
    }
    console.log("cartdata", Cart);

  }
  console.log("cartdata", Cart);

  //wishlist
  const ClickWishlist = (item, index) => {
    setWishlistToggle(!WishlistToggle);
    const whislisted = Wishlist.findIndex((val) => {
      return val.id == item.id
    })
    const containsItem = !!Wishlist.find(val => {
      return val.id === item.id
    })
    if (containsItem === false) {
      const WishData = [ ...Wishlist, item ];
      setWishlist(WishData);
      localStorage.setItem('Wishdata', JSON.stringify(WishData));
    } else {
      Wishlist.splice(whislisted, 1);
      localStorage.setItem('Wishdata', JSON.stringify(Wishlist));
    }
  }
  console.log("aa", { Wishlist })


  useEffect(() => {
    console.log("useEffect");
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(
        (data) => {
          console.log(data)
          setProduct(data.products);
          console.log("product", Product);
        }
      );

  }, [])

  return (
    <div className='App'>
      <Header inputText={inputText} inputHandler={(e) => inputHandler(e)} />
      <Container>
        <Row className='mt-5'>

          {filteredData.map((item, index) => {
            return <Col className='mt-4' lg={4}>
              <Card
                WishlistToggle={!WishlistToggle}
                index={item.id} Wishlist={Wishlist}
                iswhislisted={item.iswhislisted}
                handleWishlist={() => ClickWishlist(item, index)}
                url={item.thumbnail}
                title={item.title}
                desc={item.description}
                Price={item.price}
                dicount={item.discountPercentage}
                input={inputText}
                handlecart={() => HandleCart(item, index)}

              />
            </Col>
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Index;
