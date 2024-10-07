import React, { useState } from 'react';

const VendorApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventTypes: [],
    cnicFront: null,
    cnicBack: null,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        eventTypes: checked
          ? [...prev.eventTypes, value]
          : prev.eventTypes.filter((eventType) => eventType !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.phone) newErrors.phone = 'Phone number is required.';
    if (formData.eventTypes.length === 0) newErrors.eventTypes = 'At least one event type must be selected.';
    if (!formData.cnicFront) newErrors.cnicFront = 'CNIC front image is required.';
    if (!formData.cnicBack) newErrors.cnicBack = 'CNIC back image is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('eventTypes', JSON.stringify(formData.eventTypes)); // Store as JSON string
      data.append('cnicFront', formData.cnicFront);
      data.append('cnicBack', formData.cnicBack);

      try {
        const response = await fetch('http://localhost:5000/api/vendor-application', {
          method: 'POST',
          body: data,
        });

        if (response.ok) {
          setSuccessMessage('Your application has been submitted successfully!');
          setErrorMessage('');
          setFormData({
            name: '',
            email: '',
            phone: '',
            eventTypes: [],
            cnicFront: null,
            cnicBack: null,
          }); // Reset the form
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.error || 'Something went wrong. Please try again.');
          setSuccessMessage('');
        }
      } catch (error) {
        setErrorMessage('Failed to submit application. Please check your connection.');
        setSuccessMessage('');
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#ede3d1] p-8">
      <div className="container mx-auto p-8 bg-[#f0d3d3] rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-[#332f2f] text-center">Vendor Application Form</h1>
        <p className="text-md text-[#332f2f] mt-4 text-center">Please fill out the details below.</p>

        {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-left mt-4">
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                />
                {errors.name && <p className="text-red-600">{errors.name}</p>}
              </label>
            </div>

            <div>
              <label className="block text-left mt-4">
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                />
                {errors.email && <p className="text-red-600">{errors.email}</p>}
              </label>
            </div>
          </div>

          <div>
            <label className="block text-left mt-4">
              Phone Number:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-2 p-2 border border-gray-300 rounded w-full"
              />
              {errors.phone && <p className="text-red-600">{errors.phone}</p>}
            </label>
          </div>

          <div className="mt-4">
            <label className="block text-left">Types of Events:</label>
            <div className="flex flex-col mt-2">
              <label>
                <input
                  type="checkbox"
                  value="Corporate Events"
                  onChange={handleChange}
                />
                Corporate Events
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Marriage Events"
                  onChange={handleChange}
                />
                Marriage Events
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Birthdays"
                  onChange={handleChange}
                />
                Birthdays
              </label>
            </div>
            {errors.eventTypes && <p className="text-red-600">{errors.eventTypes}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-left mt-4">
                CNIC Front Image:
                <input
                  type="file"
                  name="cnicFront"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                  className="mt-2"
                />
                {errors.cnicFront && <p className="text-red-600">{errors.cnicFront}</p>}
              </label>
            </div>

            <div>
              <label className="block text-left mt-4">
                CNIC Back Image:
                <input
                  type="file"
                  name="cnicBack"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                  className="mt-2"
                />
                {errors.cnicBack && <p className="text-red-600">{errors.cnicBack}</p>}
              </label>
            </div>
          </div>

          <p className="text-sm text-red-600 mt-4">
            Note: Only scanned images of CNIC (both sides) are accepted. Use apps like CamScanner for best results.
          </p>

          <button type="submit" className="bg-[#d9574e] text-white font-bold py-2 px-4 rounded mt-4">
            Submit Application
          </button>
        </form>
      </div>
      <footer className="w-full bg-[#332f2f] text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 EventFusion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default VendorApplicationForm;
