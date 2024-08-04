import React, { useState ,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signupAsync,signupError,signupSuccess } from '../../Services/Action/Authsingup';
import swal from 'sweetalert'; // Import SweetAlert

function Signup() {
    const { error, success } = useSelector(state => state.authReducer || {});
    const [inputbox, setInputbox] = useState({
        name: '',
        email: '',
        password: '',
        conf_password: ''
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputbox(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputbox.password === inputbox.conf_password) {
            dispatch(signupAsync(inputbox));
        } else {
            dispatch(signupError('Passwords do not match'));
        }
        setInputbox({
            name: '',
            email: '',
            password: '',
            conf_password: ''
        });
    };

    useEffect(() => {
        if (success) {
            swal("Success!", "Sign up successful!", "success");
            navigate("/login");
        }
    }, [success, navigate]);

    return (
        <section className='sing-poti bg-white'>
            <div className='bg-header-img-2 col-12 d-flex justify-content-center align-items-center'>
                <div className='singup pt-50 col-12 text-center'>
                    <h2 className='pt-5'>Create Account</h2>
                    <p className='pb-5 text-white'>
                        <Link className='px-1'><i className="fa-sharp fa-solid fa-house"></i> Home</Link> /
                        <Link className='px-1'> Signup</Link>
                    </p>
                </div>
            </div>

            <Container>
                <Row className='justify-content-center singup-main align-items-center signin'>
                    <div className='p-5 col-6'>
                        <h2>Sign up</h2>
                        {error && <p className="text-danger">{error}</p>}
                        <p>or <span> <Link to="/login" className='text-orange'> login to your account</Link></span></p>
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3 py-3">
                                <Form.Group className='p-3' controlId="formGridName">
                                    <div className="input-icon">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your name"
                                            onChange={handleChange}
                                            name='name'
                                            value={inputbox.name}
                                            className='px-5'
                                            required
                                        />
                                        <FontAwesomeIcon icon={faUser} className="icon" />
                                    </div>
                                </Form.Group>
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
                                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
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
                                <Form.Group className='p-3' controlId="formGridPassword1">
                                    <div className="input-icon">
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirm password"
                                            onChange={handleChange}
                                            name='conf_password'
                                            value={inputbox.conf_password}
                                            className='px-5'
                                            required
                                        />
                                        <FontAwesomeIcon icon={faLock} className="icon" />
                                    </div>
                                </Form.Group>
                            </Row>
                            <Button variant="primary" className='w-100 bt1 rounded p-3' type="submit">
                                Continue
                            </Button>
                        </Form>
                        <div className='d-flex flex-wrap singup-foter py-3'>
                            By creating an account, I accept the <span className='highlight'>Terms & Conditions & Privacy Policy</span>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
}

export default Signup;
