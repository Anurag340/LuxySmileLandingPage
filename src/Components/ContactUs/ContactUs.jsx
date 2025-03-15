import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    participants: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailBody = `
      Full Name: ${formData.fullName}\n
      Email: ${formData.email}\n
      Phone Number: ${formData.phoneNumber}\n
      Company Name: ${formData.companyName}\n
      Number of Participants: ${formData.participants}\n
      Message: ${formData.message}
    `;
    window.location.href = `mailto:inquiry@luxysmile.com?subject=B2B Partnership Inquiry&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <main className="flex flex-col items-center text-center mt-12">
      <h1 className="text-4xl font-bold">
        Let's get in
        <span className="text-yellow-500"> Touch</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex items-center space-x-2">
          <i className="fas fa-phone-alt"></i>
          <div>
            <p>+91 098 987 9870</p>
            <p>+91 098 987 9870</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-envelope"></i>
          <p>inquiry@luxysmile.com</p>
        </div>
        <div className="flex items-center space-x-2">
          <i className="fas fa-map-marker-alt"></i>
          <p>
            Lorem ipsum address
            <br />
            1234098
          </p>
        </div>
      </div>
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-xl font-bold">FOR ORGANIZATIONS (B2B PARTNERSHIP INQUIRY)</h2>
        <p className="mt-2">Or fill out the form below</p>
        <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <label className="sr-only" htmlFor="full-name">Full name</label>
            <div className="relative w-4/5 md:w-full">
              <i className="fas fa-user absolute left-3 top-3 text-gray-500"></i>
              <input
                className="pl-10 py-2 w-full border border-gray-300 rounded-md"
                id="fullName"
                placeholder="Enter your full name"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <label className="sr-only" htmlFor="email">Email</label>
            <div className="relative w-4/5 md:w-full">
              <i className="fas fa-envelope absolute left-3 top-3 text-gray-500"></i>
              <input
                className="pl-10 py-2 w-full border border-gray-300 rounded-md"
                id="email"
                placeholder="Enter your inquiry purpose"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <label className="sr-only" htmlFor="phone-number">Phone Number</label>
            <div className="relative w-4/5 md:w-full">
              <i className="fas fa-phone-alt absolute left-3 top-3 text-gray-500"></i>
              <input
                className="pl-10 py-2 w-full border border-gray-300 rounded-md"
                id="phoneNumber"
                placeholder="Enter your phone number"
                type="text"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <label className="sr-only" htmlFor="company-name">Company name</label>
            <div className="relative w-4/5 md:w-full">
              <i className="fas fa-building absolute left-3 top-3 text-gray-500"></i>
              <input
                className="pl-10 py-2 w-full border border-gray-300 rounded-md"
                id="companyName"
                placeholder="Enter your company name"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <label className="sr-only" htmlFor="participants">Number of participants/strength (Approx.)</label>
            <div className="relative w-4/5 md:w-full">
              <i className="fas fa-users absolute left-3 top-3 text-gray-500"></i>
              <input
                className="pl-10 py-2 w-full border border-gray-300 rounded-md"
                id="participants"
                placeholder="Enter the number"
                type="text"
                value={formData.participants}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <label className="sr-only" htmlFor="message">Short message (optional)</label>
            <div className="relative w-4/5 md:w-full">
              <i className="fas fa-comment-dots absolute left-3 top-3 text-gray-500"></i>
              <input
                className="pl-10 py-2 w-full border border-gray-300 rounded-md"
                id="message"
                placeholder="Enter your message here"
                type="text"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 mb-10 flex justify-center">
            <button className="mt-6 bg-white text-black px-6 py-2 rounded-full" type="submit">Submit form</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ContactUs;
