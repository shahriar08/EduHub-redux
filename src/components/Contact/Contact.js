import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
    return (
        <div className="contacts container">
            <div className="contact">
                <h3 className="text-danger fw-bold">Contact us</h3>
                <h4>Keep in Touch</h4>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Your Name" />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button class="btn btn-danger">Submit</Button>{' '}
                    </Form>
                </div>
            </div>
            <div className="contact">
                <h3 className="address text-danger fw-bold">Address</h3>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>43 castle road 517 district, kiyev port south Canada.</td>
                        </tr>
                        <tr>
                            <td>email@yourmail.com</td>
                        </tr>
                        <tr>
                            <td>+8801555000088</td>
                        </tr>
                        <tr>
                            <td>yourwebsite.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Contact;