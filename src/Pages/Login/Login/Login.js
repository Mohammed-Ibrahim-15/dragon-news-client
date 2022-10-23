import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {

    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((result) => {
                const user = result.user
                console.log(user)
                form.reset();
                navigate('/')
            })
            .catch((error) => {
                console.error('Error: ', error)
            })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;