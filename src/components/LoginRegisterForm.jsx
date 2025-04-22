import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

const LoginRegisterForm = () => {
    const dispatch = useDispatch();
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isRegistering) {
            if (formData.password !== formData.confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            const newUser = {
                username: formData.username.trim(),
                email: formData.email.trim(),
                password: formData.password.trim(),
            };

            localStorage.setItem('user', JSON.stringify(newUser));
            dispatch(login(newUser));
        } else {
            const savedUserString = localStorage.getItem('user');
            if (!savedUserString) {
                alert('No registered users found.');
                return;
            }

            const savedUser = JSON.parse(savedUserString);

            if (
                savedUser.email === formData.email.trim() &&
                savedUser.password === formData.password.trim()
            ) {
                dispatch(login(savedUser));
            } else {
                alert('Incorrect credentials.');
            }
        }
    };

    return (
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">
                {isRegistering ? 'Register' : 'Login'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {isRegistering && (
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full p-3 border rounded"
                        required
                    />
                )}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-3 border rounded"
                    required
                />
                {isRegistering && (
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full p-3 border rounded"
                        required
                    />
                )}
                <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">
                    {isRegistering ? 'Register' : 'Login'}
                </button>
            </form>

            <div className="text-center mt-4">
                <button
                    type="button"
                    onClick={() => setIsRegistering(!isRegistering)}
                    className="text-sm text-blue-500 hover:underline"
                >
                    {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
                </button>
            </div>
        </div>
    );
};

export default LoginRegisterForm;
