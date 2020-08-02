import React from 'react';
import './App.css';
import FormWithRecaptchaV3 from './components/FormWithRecaptchaV3/FormWithRecaptchaV3';
import FormWithRecaptchaV2 from './components/FormWithRecaptchaV2/FormWithRecaptchaV2';
import FormWithRecaptchaV2Invisible from './components/FormWithRecaptchaV2Invisible/FormWithRecaptchaV2Invisible';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm">
            <h5>reCaptcha V3 example</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <FormWithRecaptchaV3 />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm">
            <h5>reCaptcha V2 Tickbox example</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <FormWithRecaptchaV2 />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm">
            <h5>reCaptcha V2 Invisible example</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <FormWithRecaptchaV2Invisible />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
