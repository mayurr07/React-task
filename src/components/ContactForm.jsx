// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [form, setForm] = useState({ name: '', phone: '', email: '' });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Form submitted (connect this to backend)');
//   };

//   return (
//     <section id="contact" className="py-16 px-4 md:px-8  bg-white">
//       <div className="max-w-4xl mx-auto text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Us</h2>
//       </div>
//       <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full p-4 border rounded-md"
//           required
//         />
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone Number"
//           value={form.phone}
//           onChange={handleChange}
//           className="w-full p-4 border rounded-md"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full p-4 border rounded-md"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-pink-600 text-white py-4 rounded-md hover:bg-pink-700 transition"
//         >
//           Submit
//         </button>
//       </form>
//     </section>
//   );
// };

// export default ContactForm;


import React, { useState, useEffect } from 'react';
import { FaPhone, FaDownload } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    country_name: 'India',
    country_code: '+91',
    phone: '',
    builder: 'Godrej Properties',
    project: 'Godrej Horizon',
    lead_source: 'Microsite',
    enquiredfor: 'Pre Register here for Best Offers'
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Update country code when country changes
    if (name === 'country_name') {
      const selectedOption = e.target.options[e.target.selectedIndex];
      const countryCode = selectedOption.getAttribute('data-contry_code');
      setFormData(prev => ({
        ...prev,
        country_code: `+${countryCode}`
      }));
    }

    // Validate phone number to only allow digits
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      if (digitsOnly !== value) {
        e.target.value = digitsOnly;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    let valid = true;
    const newErrors = { name: '', email: '', phone: '' };

    if (!formData.fname.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Submit form data
      console.log('Form submitted:', formData);
      // fetch('https://microsite.fanmrealty.com/live/lead-callback.php', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      //   headers: { 'Content-Type': 'application/json' }
      // })
      // .then(response => response.json())
      // .then(data => console.log('Success:', data))
      // .catch(error => console.error('Error:', error));
    }
  };

  return (
    <div className="micro-side text-center bg-white p-4 rounded-lg shadow-md max-w-md mx-auto">
      {/* Form Heading */}
      <span className="block text-lg font-bold my-3 text-gray-800">Get The Best Quote</span>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="form-side space-y-3" id="pardotForm">
        <div>
          <input
            type="text"
            id="fname"
            placeholder="Name"
            name="fname"
            className="form-control w-full px-3 py-2 border-b rounded focus:outline-none focus:ring-2 focus:[#024e6d]"
            required
            onChange={handleChange}
          />
          {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
        </div>

        <div>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            name="email"
            className="form-control w-full px-3 py-2 border-b rounded focus:outline-none focus:ring-2 focus:[#024e6d]"
            required
            onChange={handleChange}
          />
          {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
        </div>

        <select
          className="my_country_name w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:[#024e6d]"
          name="country_name"
          onChange={handleChange}
          value={formData.country_name}
        >
          <option data-countrycode="IN" value="India" data-contry_code="91">India (+91)</option>
          <option data-countrycode="US" value="United States" data-contry_code="1">United States (+1)</option>
          <option data-countrycode="GB" value="United Kingdom" data-contry_code="44">United Kingdom (+44)</option>
          {/* Add more countries as needed */}
        </select>

        <input type="hidden" value={formData.country_code} name="country_code" id="country_code" />

        <div>
          <input
            name="phone"
            className="form-control w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="modal_my_mobile"
            placeholder="Phone number"
            type="text"
            value={formData.phone}
            required
            onChange={handleChange}
            pattern="[0-9]*"
          />
          {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
        </div>

        {/* Hidden fields */}
        <input type="hidden" name="builder" value={formData.builder} />
        <input type="hidden" name="project" value={formData.project} />
        <input type="hidden" name="lead_source" value={formData.lead_source} />
        <input type="hidden" name="enquiredfor" value={formData.enquiredfor} />

        <button
          type="submit"
          className="btn btn-info bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-2 px-4 rounded w-full transition-all duration-300 shadow-md hover:shadow-lg"
          id="submitBtn"
        >
          Get It Now
        </button>
      </form>
    </div>
  );
};

export default ContactForm;