import React, { useState } from 'react';
import './AuthPage.css';
import { useNavigate } from 'react-router-dom';

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
    shopImage: null,
  });

  const [previewProfile, setPreviewProfile] = useState(null);
  const [previewShop, setPreviewShop] = useState(null);
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

    if (name === 'profileImage') {
      const file = files[0];
      setForm({ ...form, profileImage: file });
      setPreviewProfile(URL.createObjectURL(file));
    } else if (name === 'shopImage') {
      const file = files[0];
      setForm({ ...form, shopImage: file });
      setPreviewShop(URL.createObjectURL(file));
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

    if (isLogin) {
      // Simulated login (Replace with real API later)
      const { email, role } = form;

      localStorage.setItem('role', role);
      localStorage.setItem('email', email);

      redirectToDashboard(role);
    } else {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        if (form[key]) {
          formData.append(key, form[key]);
        }
      });

      try {
        const res = await fetch('http://localhost:5000/register', {
          method: 'POST',
          body: formData,
        });

        if (res.ok) {
          setSuccess('Registered successfully!');
          localStorage.setItem('role', form.role);
          localStorage.setItem('email', form.email);
          redirectToDashboard(form.role);
        } else {
          setError('Server error during registration');
        }
      } catch (err) {
        console.error('Error:', err);
        setError('Network error');
      }
    }
  };

  const redirectToDashboard = (role) => {
    switch (role) {
      case 'admin':
        navigate('/admin-dashboard');
        break;
      case 'shopOwner':
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
          <option value="admin">Admin</option>
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
            <input type="file" name="profileImage" accept="image/*" onChange={handleChange} />
            {previewProfile && <img src={previewProfile} alt="Preview" className="preview-image" />}
          </>
        )}

        {!isLogin && form.role === 'shopOwner' && (
          <>
            <input
              type="text"
              name="shopName"
              placeholder="Shop Name"
              value={form.shopName}
              onChange={handleChange}
              required
            />
            <label>Upload Shop Image:</label>
            <input type="file" name="shopImage" accept="image/*" onChange={handleChange} />
            {previewShop && <img src={previewShop} alt="Shop Preview" className="preview-image" />}
          </>
        )}

        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>

        {error && <p className="error-msg">{error}</p>}
        {success && <p className="success-msg">{success}</p>}

        <p onClick={handleToggle} className="toggle-link">
          {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
        </p>
      </form>
    </div>
  );
};

export default AuthPage;
