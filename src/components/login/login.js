import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Card, Container, Form, Button, Row, Col} from "react-bootstrap";
import "./login.css";
import {MdCheck, MdEmail, MdLock} from "react-icons/all";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //componentDidMount
    useEffect(() => {
        console.log("The function useEffect executes");
    }, []);

    //componentDidUpdate
    useEffect(() => {
        console.log("Executed when email is updated");
        console.log(email);
    }, [email]);

    //componentWillUnmount
    useEffect(() => {
        return () => {
            console.log("Component unmounts");
        };
    }, []);

    return (
        <Container fluid className="login">
            <Row className="m-auto h-100">
                <Col md={{span: 6, offset: 3}} lg={{span: 4, offset: 3}} className="m-auto">
                    <Card text="white" className="form-card m-0 p-0">
                        <Card.Header className="card-title p-4"><h4 className="m-0">Login Form</h4></Card.Header>
                        <Card.Body className="px-5 py-5">

                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label><MdEmail/>&nbsp;&nbsp;Email address</Form.Label>
                                    <Form.Control className="mt-1 mb-2" type="email" placeholder="Enter email"
                                                  value={email} onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}/>
                                    <Form.Text className="info-text-1 pt-4 mt-4">We'll never share your email with
                                        anyone else.</Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-4 mt-4" controlId="formBasicPassword">
                                    <Form.Label><MdLock/>&nbsp;&nbsp;Password</Form.Label>
                                    <Form.Control className="mt-1 mb-2" type="password" placeholder="Enter Password"
                                                  value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </Form.Group>
                                <Link to="/register">
                                    <Form.Text className="info-text-2 pt-3">Don't have an account?</Form.Text>
                                </Link>
                                <br/>
                                <br/>
                                <Button variant="primary" type="submit"
                                        className="button mt-3 mb-2 btn-submit py-2 ps-4 pe-4">
                                    <MdCheck/>&nbsp;&nbsp;Submit&nbsp;&nbsp;
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
