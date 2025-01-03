import React, { useState } from 'react';
import Button from '../Button';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
      <div className="relative">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-blue-100 rounded-lg 
                   focus:border-blue-300 focus:ring-2 outline-none focus:ring-blue-200 transition-all
                   placeholder:text-gray-400"
          required
        />
        <div className="absolute inset-0 pointer-events-none rounded-lg bg-gradient-to-r from-blue-50/30 to-transparent" />
      </div>

      <div className="relative">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-blue-100 rounded-lg 
                   focus:border-blue-300 focus:ring-2 outline-none focus:ring-blue-200 transition-all
                   placeholder:text-gray-400"
          required
        />
        <div className="absolute inset-0 pointer-events-none rounded-lg bg-gradient-to-r from-blue-50/30 to-transparent" />
      </div>

      <div className="relative">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-blue-100 rounded-lg 
                   focus:border-blue-300 focus:ring-2 outline-none focus:ring-blue-200 transition-all
                   placeholder:text-gray-400"
          required
        />
        <div className="absolute inset-0 pointer-events-none rounded-lg bg-gradient-to-r from-blue-50/30 to-transparent" />
      </div>

      <Button bg={"hover:bg-black"} text={"Send Message"} />
    </form>
  );
}
