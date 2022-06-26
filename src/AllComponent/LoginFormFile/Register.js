import React, { useState } from 'react';
import './Register.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';




const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [ConfurmPass, setConfurmPass] = useState('');

    
    const getName = (e) => {
        setName(e.target.value)
    }
    const getEmail = e => {
        setEmail(e.target.value)
    }
    const getPass = e => {
        setPass(e.target.value)
    }

    const getConfurmPass = e => {
        setConfurmPass(e.target.value)
    }

    const submitData = e => {
        e.preventDefault()
        console.log(name, email, pass, ConfurmPass);
        if (pass !== ConfurmPass) {
            alert("passWord is not matching..! please try again")
        }
        else {
            createUserWithEmailAndPassword(email, pass)
        }
    }


    return (
        <div>
            <h2>this is register page</h2>
            <div className="register-form-style">
                <Form onSubmit={submitData}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={getName} type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={getEmail} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={getPass} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfurmPassword">
                        <Form.Label>Confurm Password</Form.Label>
                        <Form.Control onBlur={getConfurmPass} type="password" placeholder="Confurm-Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <p>if you are already in registerd,,, please go to <Link to="/login">Login</Link> form </p>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;