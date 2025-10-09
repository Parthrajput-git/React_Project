import React, { useState } from 'react';
import './ResetPassword.css';

const ResetPassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = (e) => {
    e.preventDefault();

    // Basic empty field check
    if (!currentPassword || !newPassword) {
      setMessage('Please fill in both fields.');
      return;
    }

    // Length validation
    if (newPassword.length < 6 || newPassword.length > 10) {
      setMessage('New password must be between 6 and 10 characters.');
      return;
    }

    // Example object to hold data (can be sent to backend)
    const resetData = {
      currentPassword,
      newPassword
    };

    console.log('Reset data:', resetData);

    setMessage('Password reset successfully.');
    setCurrentPassword('');
    setNewPassword('');
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleReset} className="reset-form">
        <div className="form-group">
          <label htmlFor="currentPassword">Current Password</label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter current password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password (6–10 characters)"
          />
        </div>

        <button type="submit" className="reset-button">Reset</button>
      </form>

      {message && <p className="reset-message">{message}</p>}
    </div>
  );
};

export default ResetPassword;
