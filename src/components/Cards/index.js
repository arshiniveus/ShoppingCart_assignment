import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";




function BasicExample (props) {

  const containsItem = !!props.Wishlist.find(val => {
    return val.id === props.index
  })

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.url} width={"20"} style={{ height: "150px" }} />
      <Card.Body>

        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ height: "100px" }}>
          {props.desc}
        </Card.Text>
        <Card.Text >
          Price:{props.Price}
        </Card.Text>
        <Card.Text >
          Discount:{props.dicount}%
        </Card.Text>
        <Button variant="dark" onClick={props.handlecart} >Add to Cart</Button>
        {containsItem ?
          <BsSuitHeartFill className='mt-3' style={{ float: 'right', color: "red" }} onClick={props.handleWishlist} /> :
          <BsSuitHeart className='mt-3' style={{ float: 'right' }} onClick={props.handleWishlist} />
        }
      </Card.Body>
    </Card>
  );
}

export default BasicExample;