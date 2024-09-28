import React, { useState } from 'react';
import axios from 'axios';
import './forgotpassword.css';

const ForgotPass = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('/api/forgot-password', { email });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error sending password reset email. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="forgot-pass-container">
            <div className="forgot-pass-card">
                <h2>Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <button type="submit" className="submit-btn" disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                </form>
                {message && <p className={`message ${message.includes('Error') ? 'error' : 'success'}`}>{message}</p>}
            </div>
        </div>
    );
};

export default ForgotPass;