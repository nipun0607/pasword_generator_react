

import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const generatePassword = () => {
    const characters = `abcdefghijklmnopqrstuvwxyz${includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''}${includeNumbers ? '0123456789' : ''}${includeSpecialChars ? '!@#$%^&*()_+{}[]|\\"\'<>?,./' : ''}`;

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div className="options">
        <label>Password Length:</label>
        <input
          type="number"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </div>
      <div className="options">
        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          Include Lowercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          Include Uppercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
          Include Special Characters
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      {password && (
        <div className="generated-password">
          <h2>Generated Password:</h2>
          <p>{password}</p>
          <button onClick={copyToClipboard}>Copy to Clipboard</button>
        </div>
      )}
    </div>
  );
};

export default App;
