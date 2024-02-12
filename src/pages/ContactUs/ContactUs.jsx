import React, { useState } from "react";
import "../ContactUs/ContactUs.scss";
import axios from 'axios';
import Swal from 'sweetalert2';
import Footer from "../../components/FooterSect/Footer";


const ContactUs = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address.',
            position: 'top'
          });
          return;
        }
    
        try {
          // Send form data using Axios
          const response = await axios.post('YOUR_BACKEND_API_ENDPOINT', formData);
    
          // Show success message
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Your message has been successfully sent.',
            position: 'top'
          });
    
          // Clear form data
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } catch (error) {
          // Show error message if request fails
          console.error('Error:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'An error occurred while sending your message. Please try again later.',
            position: 'top'
          });
        }
      };
  
    return (
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <p>Get in touch with us, we will love to hear from you.</p>
        <form className="form-contact"
        
         onSubmit={handleSubmit}>
          <div className="form-group">
          
            <input
              type="text"
              id="name"
              name="name" placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
          
            <input
              type="email"
              id="email" placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message" placeholder="Write to us, we want to hear from you"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>

        <div className="foot">
        <Footer/>
        </div>
      </div>

      
    );
  };

export default ContactUs;
