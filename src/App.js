import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [errorText, setErrorText] = useState('');
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');
  const [spinner, setSpinner] = useState(false);

  const onChange = e => setUrl(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (url === '' || !url.includes('http') || !url.includes('https')) {
      setErrorText('Please enter a valid URL with http:// or https://');
    } else {
      setSpinner(true);

      setTimeout(() => {
        setQr(
          `https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=300x300`
        );
        setSpinner(false);
      }, 500);
    }
  };

  const resetForm = () => {
    setUrl('');
    setQr('');
  };

  return (
    <div className="App" style={{ padding: '5%' }}>
      <div className="container" style={{ height: '100vh' }}>
        <div className="row">
          <div className="column">
            <h1>QR Code Generator</h1>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <form
              className="form"
              onSubmit={onSubmit}
              style={{ marginTop: '3%' }}
            >
              <input
                type="url"
                name="text"
                placeholder="Enter your URL with http://... or https://..."
                value={url}
                onChange={onChange}
                onKeyDown={() => setErrorText('')}
              />
              {qr.length > 0 ? (
                <span
                  className="float-right"
                  onClick={resetForm}
                  style={{ cursor: 'pointer' }}
                >
                  Delete <span style={{ color: '#ff4d4d' }}>X</span>
                </span>
              ) : null}
              {errorText !== '' ? (
                <p style={{ color: '#ff4d4d' }}>{errorText}</p>
              ) : null}
              <input
                className="button-primary"
                type="submit"
                value="Create QR-Code"
              />
            </form>
          </div>
        </div>

        {spinner ? (
          <div className="row">
            <div className="column column-50 column-offset-33">
              <div className="spinner" />
            </div>
          </div>
        ) : null}

        <div className="row">
          <div className="column column-50 column-offset-33">
            {qr.length > 0 ? (
              <>
                <img src={qr} alt={`QR Code of ${url}`} />
                <figcaption>{url}</figcaption>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="column">
            <p>
              Stack:
              <br />
              <span className="badge">React.js</span>{' '}
              <span className="badge">Milligram CSS</span>{' '}
              <span className="badge">
                QR Code API by{' '}
                <a
                  href="http://goqr.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://goqr.me/
                </a>
              </span>
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="column">
            <span className="float-left">
              made with &hearts; by{' '}
              <a
                href="https://blackforestcode.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                BLACK FOREST CODE
              </a>
            </span>
            <span className="float-right">
              <small>„QR Code“ is a trademark of DENSO WAVE INCORPORATED</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
