
import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import { BsFillTrash3Fill } from 'react-icons/bs';


export default function Index (props) {
    const [ Count, setCount ] = useState(1);



    const IncrCount = () => {
        console.log("pressed", Count);
        setCount(Count + 1);

    }

    const DescCount = () => {
        if (Count > 1) {
            console.log("pressed", Count);
            setCount(Count - 1);

        }

    }
    return (
        <>
            <tr style={{ verticalAlign: "none" }}>
                <td className='px-2' ><img src={props.url} width={200} /></td>
                <td className='px-2'>{props.Price} </td>
                <td>
                    <div className='mt-1' style={{ display: "flex" }}>
                        <Button variant="outline-dark" onClick={() => { IncrCount() }}>+</Button>
                        <p className='mt-4'>{Count}</p>
                        <Button variant="outline-dark" onClick={() => { DescCount() }}>-</Button>
                    </div>
                </td>
                <td> ${props.Price * Count}</td>
                <td><Button variant='dark' onClick={props.handleShow}>Buy Now</Button>&nbsp;&nbsp;&nbsp;
                    &nbsp;
                    <BsFillTrash3Fill style={{ color: "red" }} onClick={props.handleWishlist} /></td>


            </tr>
        </>
    )
}
