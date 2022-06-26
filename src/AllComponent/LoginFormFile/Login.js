import React, { useState } from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const naviget = useNavigate();

    if (user) {
        naviget("/")
    }
    if (loading) {
        <p>Loading...</p>
    }

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const getEmail = e => {
        setEmail(e.target.value)
    }
    const getPass = e => {
        setPass(e.target.value)
    }
    const submitData = e => {
        e.preventDefault()
        console.log(email, pass);
        signInWithEmailAndPassword(email, pass)
    }

    return (
        <div>
            <h2>this is logi page</h2>

            <nav className='navBar'>
                <Form onSubmit={submitData}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={getEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={getPass} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <p>if you are not registerd,,, please <Link to="/register">register</Link> first </p>
                    {/* <p>if you are not registerd,,, please <button onClick={()=> navigetFun()}>register</button> firse </p> */}
                    {
                        <p style={{ color: "red" }}>{error?.message}</p>
                    }
                    {
                        loading && <p className='loading-style'>Loading...</p>
                    }
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </nav>

        </div>
    );
};

export default Login;