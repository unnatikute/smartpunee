import React, { useState } from 'react';
import './register.css';

const Register = () => {
  const [form, setForm] = useState({
    shopName: '',
    ownerName: '',
    phone: '',
    email: '',
    city: '',
    category: '',
    offer: '',
    image: null
  });

  const [preview, setPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      const file = files[0];
      setForm({ ...form, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validate = () => {
    const err = {};
    if (!form.shopName.trim()) err.shopName = 'Shop name is required';
    if (!form.ownerName.trim()) err.ownerName = 'Owner name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone)) err.phone = 'Valid 10-digit phone required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) err.email = 'Valid email required';
    if (!form.city.trim()) err.city = 'City is required';
    if (!form.category.trim()) err.category = 'Category is required';
    if (!form.offer.trim()) err.offer = 'Offer description required';
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    const formData = new FormData();
    formData.append('shopName', form.shopName);
    formData.append('ownerName', form.ownerName);
    formData.append('phone', form.phone);
    formData.append('email', form.email);
    formData.append('city', form.city);
    formData.append('category', form.category);
    formData.append('offer', form.offer);
    if (form.image) {
      formData.append('image', form.image);
    }

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        console.log('✅ Shop saved with image!');
        setSubmitted(true);
        setErrors({});
      } else {
        console.error('❌ Server error');
      }
    } catch (error) {
      console.error('❌ Network error:', error);
    }
  };

  return (
    <div className="register-container">
      <h2>Register Your Shop</h2>
      <p>Join LocalOffers to promote your offers and attract more customers.</p>

      {submitted ? (
        <div className="success-message">✅ Your shop has been registered successfully!</div>
      ) : (
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label>Shop Name *</label>
            <input type="text" name="shopName" value={form.shopName} onChange={handleChange} />
            {errors.shopName && <span className="error">{errors.shopName}</span>}
          </div>

          <div className="form-group">
            <label>Owner Name *</label>
            <input type="text" name="ownerName" value={form.ownerName} onChange={handleChange} />
            {errors.ownerName && <span className="error">{errors.ownerName}</span>}
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>City *</label>
            <input type="text" name="city" value={form.city} onChange={handleChange} />
            {errors.city && <span className="error">{errors.city}</span>}
          </div>

          <div className="form-group">
            <label>Category *</label>
            <select name="category" value={form.category} onChange={handleChange}>
              <option value="">Select Category</option>
              <option>Clothing</option>
              <option>Electronics</option>
              <option>Grocery</option>
              <option>Food & Beverages</option>
              <option>Books</option>
              <option>Home Essentials</option>
            </select>
            {errors.category && <span className="error">{errors.category}</span>}
          </div>

          <div className="form-group">
            <label>Offer Description *</label>
            <textarea name="offer" value={form.offer} onChange={handleChange} rows="3" />
            {errors.offer && <span className="error">{errors.offer}</span>}
          </div>

          <div className="form-group">
            <label>Upload Shop Image</label>
            <input type="file" name="image" accept="image/*" onChange={handleChange} />
            {preview && <img src={preview} alt="Preview" className="preview-image" />}
          </div>

          <button type="submit" className="submit-btn">Register</button>
        </form>
      )}
    </div>
  );
};

export default Register;
