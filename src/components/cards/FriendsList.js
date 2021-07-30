import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import FriendCard from "./FriendCard";
import "./styles.css";

const FriendsList = () => {
    const friendsList = [
        {name: 'Ravindu Wegiriya', image: 'Frog1.jpg', quote: "Yo boys, I'm THE Mac gura! #Macනම්Wega 😎"},
        {name: 'Samadhi Anuththara', image: 'Frog2.jpg', quote: "Ane meh oowata enna epa harithe, me gud gud! 🤪"},
        {name: 'Ravindu Sasanka', image: 'Frog3.jpg', quote: "Guys, guys let's switch to Telegraaaaam! 😭"},
        {name: 'Venudi Dayaratne', image: 'Frog4.jpg', quote: "Dance and Art is life! 💃 #Vectorනම්Venudi"},
        {name: 'Nipun Chamikara', image: 'Frog5.jpg', quote: "Time, time we need more time! 🥲"}
    ]

    const renderFriendsList = friendsList.map((friend, index) =>
        <FriendCard name={friend.name} image={friend.image} quote={friend.quote}/>
    );

    return (
        <>
            <Container className="pt-4 pb-5 px-1">
                <Row className="w-100 justify-content-center pt-2">
                    <Col xs={12}>
                        <h2 className="text-center pt-2 pb-2">My Friends 🥲</h2>
                        <hr/>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5 friends-list">
                    {renderFriendsList}
                </Row>
            </Container>
        </>
    );
};

export default FriendsList;
