import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("success");
    setTimeout(() => {
      setSubmitStatus(null);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>İletişime Geç</h1>
        <p>Benimle iletişime geçmek için aşağıdaki formu doldurabilirsiniz.</p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt size={24} />
            <div>
              <h3>Konum</h3>
              <p>Erzurum, Türkiye</p>
            </div>
          </div>
          <div className="info-item">
            <FaEnvelope size={24} />
            <div>
              <h3>Email</h3>
              <p>melekkaksuu@gmail.com</p>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/melekaksu" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/melek-aksu-ab6193224/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Adınız</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email Adresiniz</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Konu</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Mesajınız</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Gönder</button>
            {submitStatus === "success" && (
              <div className="success-message">Mesajınız başarıyla gönderildi. Teşekkür ederim!</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
