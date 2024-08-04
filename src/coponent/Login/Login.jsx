import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from'../../Services/Action/Authlogin';

function Login() {
    const [inputbox, setInputbox] = useState({
        email: '',
        password: ''
    });

    const authState = useSelector(state => state.authReducer2 || {}); // Safe access
    const { error, isLoading, user } = authState;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputbox(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAsync(inputbox.email, inputbox.password));
    };

    useEffect(() => {
        if (user) {
            navigate("/"); // Redirect to home or another page on successful login
        }
    }, [user, navigate]);

    return (
        <section className='sing-poti bg-white'>
            <div className='bg-header-img-2 col-12 d-flex justify-content-center align-items-center'>
                <div className='singup pt-50 col-12 text-center'>
                    <h2 className='pt-5'>Login</h2>
                    <p className='pb-5 text-white'>
                        <Link className='px-1'><i className="fa-sharp fa-solid fa-house"></i> Home</Link> /
                        <Link className='px-1'>Login</Link>
                    </p>
                </div>
            </div>
            <Container>
                <Row className='justify-content-center singup-main align-items-center signin'>
                    <div className='p-5 col-12'>
                        <h2>Sign in</h2>
                        {error && <p className="text-danger">{error}</p>}
                        <p>or <span><Link to="/singin" className='text-orange'>create an account</Link></span></p>
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3 py-3">
                                <Form.Group className='p-3' controlId="formGridEmail">
                                    <div className="input-icon">
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email"
                                            onChange={handleChange}
                                            name='email'
                                            value={inputbox.email}
                                            className='px-5'
                                            required
                                        />
                                        <FontAwesomeIcon icon={faUser} className="icon" />
                                    </div>
                                </Form.Group>
                                <Form.Group className='p-3' controlId="formGridPassword">
                                    <div className="input-icon">
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            onChange={handleChange}
                                            name='password'
                                            value={inputbox.password}
                                            className='px-5'
                                            required
                                        />
                                        <FontAwesomeIcon icon={faLock} className="icon" />
                                    </div>
                                </Form.Group>
                            </Row>
                            <Button variant="primary" className='w-100 bt1 rounded p-3' type="submit" disabled={isLoading}>
                                {isLoading ? 'Loading...' : 'Continue'}
                            </Button>
                        </Form>
                        <p className='d-flex flex-wrap singup-foter p-3'>
                            By logging in, I accept the <span className='highlight'> Terms & Conditions & Privacy Policy</span>
                        </p>
                    </div>
                </Row>
            </Container>
        </section>
    );
}

export default Login;
