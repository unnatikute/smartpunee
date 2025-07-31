import React, { useState } from 'react';
import './AuthPage.css';
import { useNavigate } from 'react-router-dom';
import ShopOwnerDashboard from './../Dashboard/ShopOwner';
import CategoryPage from './../Pages/categories/CategoryPage';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({
        role: 'user',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        profileImage: null,
        shopName: '',
    });

    const [previewProfile, setPreviewProfile] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsLogin(!isLogin);
        setError('');
        setSuccess('');
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'profileImage' && files[0]) {
            setForm({ ...form, profileImage: files[0] });
            setPreviewProfile(URL.createObjectURL(files[0]));
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.email || !form.password) {
            setError('Email and password are required.');
            return;
        }

        if (!isLogin && form.password !== form.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setError('');
        setSuccess('');

        if (isLogin) {
            try {
                const res = await fetch('http://localhost:5000/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: form.email,
                        password: form.password,
                        role: form.role.toLowerCase(), // Ensure role is lowercase
                    }),
                });

                const data = await res.json();

                if (res.ok) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('role', data.role);
                    localStorage.setItem('email', form.email);
                    redirectToDashboard(data.role);
                } else {
                    setError(data.error || 'Login failed.');
                }
            } catch (err) {
                console.error(err);
                setError('Network error.');
            }

        } else {
            const formData = new FormData();
            Object.entries(form).forEach(([key, value]) => {
                if (value) formData.append(key, value);
            });

            try {
                const res = await fetch('http://localhost:5000/api/auth/register', {
                    method: 'POST',
                    body: formData,
                });

                const data = await res.json();

                if (res.ok) {
                    setSuccess(data.message || 'Registered successfully!');
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('role', data.role);
                    localStorage.setItem('email', form.email);
                    redirectToDashboard(data.role);
                } else {
                    setError(data.error || 'Server error during registration.');
                }
            } catch (err) {
                console.error(err);
                setError('Network error.');
            }
        }
    };

    const redirectToDashboard = (role) => {
        switch (role) {
            case 'admin':
                navigate('/admin-dashboard');
                break;
            case 'shopowner':
                navigate('/shop-dashboard');
                break;
            case 'user':
                navigate('/user-dashboard');
                break;
            default:
                navigate('/unauthorized');
        }
    };

    return (
        <div className="auth-container">
            <h2>{isLogin ? 'Login' : 'Register'}</h2>

            <form onSubmit={handleSubmit} className="auth-form">
                {!isLogin && (
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                )}

                <select name="role" value={form.role} onChange={handleChange}>
                    <option value="user">User</option>
                    <option value="shopOwner">Shop Owner</option>
                 
                </select>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />

                {!isLogin && (
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                )}

                {!isLogin && (
                    <>
                        <label>Upload Profile Image:</label>
                        <input
                            type="file"
                            name="profileImage"
                            accept="image/*"
                            onChange={handleChange}
                        />
                        {previewProfile && (
                            <img src={previewProfile} alt="Profile Preview" className="preview-image" />
                        )}
                    </>
                )}

                {!isLogin && form.role === 'shopOwner' && (
                    <input
                        type="text"
                        name="shopName"
                        placeholder="Shop Name"
                        value={form.shopName}
                        onChange={handleChange}
                        required
                    />
                )}

                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>

                {error && <p className="error-msg">{error}</p>}
                {success && <p className="success-msg">{success}</p>}

                <p className="toggle-link" onClick={handleToggle}>
                    {isLogin
                        ? "Don't have an account? Register"
                        : 'Already have an account? Login'}
                </p>
            </form>
        </div>
    );
};

export default AuthPage;
