import React from 'react';
import './App.css';
import FormWithRecaptchaV3 from './components/FormWithRecaptchaV3/FormWithRecaptchaV3';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <FormWithRecaptchaV3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
