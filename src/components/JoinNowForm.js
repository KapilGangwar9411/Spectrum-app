import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../assets/styles.css';

const JoinNowForm = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: '',
    year: '',
    interest: '',
    rating: '',
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (Object.values(formData).some((val) => !val)) {
      setError('All fields are required.');
      return;
    }

    try {
      await sendEmail(formData);
      setSubmitted(true);
      setIsOpen(false);
    } catch (err) {
      setError('Failed to send email. Please try again later.');
    }
  };

  const sendEmail = (data) => {
    return emailjs.send('service_h13jppi', 'template_ng8cl2b', data, 'KiF7FWz3Etc-KKmnh');
  };

  const handleModalClick = (e) => {
    if (e.target.className === 'modal') {
      setIsOpen(false);
    }
  };

  return (
    <div className="form-container">
      {isOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <h2 className="modal-title">Join Us</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
              {Object.keys(formData).map((key) => (
                <div className="input-group" key={key}>
                  <input 
                    type={key === 'phone' ? 'tel' : 'text'} 
                    name={key} 
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)} 
                    value={formData[key]} 
                    onChange={handleChange} 
                    required 
                    className="input-field"
                  />
                </div>
              ))}
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}

      {submitted && (
        <div className="thank-you-message">
          <p>Thank you for joining us!</p>
        </div>
      )}
    </div>
  );
};

export default JoinNowForm;
