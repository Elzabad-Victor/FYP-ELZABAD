const VendorApplication = require('../Models/vendorapplication');

// Submit application logic
exports.submitApplication = async (req, res) => {
  const { name, email, phone, eventTypes } = req.body;

  try {
    const newApplication = new VendorApplication({
      // Remove userId since authentication is not required
      name,
      email,
      phone,
      eventTypes,
      cnicFront: req.files['cnicFront'][0].path,
      cnicBack: req.files['cnicBack'][0].path,
    });

    await newApplication.save();
    res.status(201).json({ message: 'Your application has been submitted successfully.' });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ error: 'Error submitting application', details: error.message });
  }
};
