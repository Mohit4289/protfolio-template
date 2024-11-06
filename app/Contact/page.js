"use client"
import React, { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaTelegramPlane } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    
    emailjs.send('service_t35yoce', 'template_fxfui5f', templateParams, '5oRpHWl5u9RZpXr6U')
      .then((response) => {
        setStatus('Message Sent!');
        console.log('Success:', response);
      })
      .catch((error) => {
        setStatus('Failed to send message. Please try again.');
        console.log('Error:', error);
      });


    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 md:px-16">

      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-4">
          I’d love to hear from you! Please feel free to reach out for collaborations or just a friendly chat.
        </p>
        <div className="flex justify-center items-center gap-8">
          <a href="https://www.linkedin.com/in/mohit-tiwari-1967b32a5/" className="text-blue-600 hover:text-blue-800">
            <FaLinkedinIn size={40} />
          </a>
          <a href="https://github.com/Mohit4289" className="text-gray-800 hover:text-gray-900">
            <FaGithub size={40} />
          </a>
          <a href="mailto:srttiwari4289@gmail.com" className="text-gray-800 hover:text-gray-900">
            <IoIosMail size={40} />
          </a>
        </div>
      </div>

      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        {status && (
          <div className="mt-4 text-center text-lg font-semibold text-gray-800">
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
