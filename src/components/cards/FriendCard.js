import React from 'react';
import {Button, Card, Col} from "react-bootstrap";

const FriendCard = (props) => {
    const {name, image, quote} = props;
    return (
        <Col className="">
            <Card style={{width: '15rem'}}>
                <Card.Img variant="top" src={"/friends/" + image}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <hr/>
                    <Card.Text>
                        {quote}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default FriendCard;
