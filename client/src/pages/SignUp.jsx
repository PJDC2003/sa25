import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3001/sign-up', { name, email, password })
            .then((res) => {
                console.log(res);
                navigate('/login');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="h-96 flex bg-secondary items-center justify-center self-center ">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text" placeholder="Enter Name" autoComplete="off" name="email" className="rounded-0" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text" placeholder="Enter Name" autoComplete="off" name="email" className="rounded-0" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text" placeholder="Enter Name" autoComplete="off" name="email" className="rounded-0" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="button w-96">
                        Register
                    </button>
                    <p>Already Have an Account</p>
                    <Link to="/login" className="button w-96 ">
                        Login
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
