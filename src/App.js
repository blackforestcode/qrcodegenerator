import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');

  const onChange = e => setUrl(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (url === '') {
      alert('Please enter an url.');
    } else {
      setQr(
        `https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=300x300`
      );
    }
  };

  return (
    <div className="App" style={{ padding: '5%' }}>
      <h1>QR Code Generator</h1>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="url"
          placeholder="Enter a URL..."
          value={url}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Create QR-Code"
          className="btn btn-dark btn-block"
        />
      </form>
      <div style={{ margin: '5%' }}>
        <img src={qr} alt="QR Code" />
      </div>
    </div>
  );
};

export default App;
