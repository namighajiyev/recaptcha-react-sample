import React, { useState, useCallback } from 'react';
import { postPersonWithRecaptchV3 } from '../../helpers/api';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';


const FormWithRecaptchaV3 = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    surname: ''
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleChange = useCallback((e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }, [formValues]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    console.log(formValues);
    console.log(formValues);
    const token = await executeRecaptcha("FormWithRecaptchaV3");
    console.log(token);
    postPersonWithRecaptchV3({ person: formValues, recaptchaToken: token })
      .then(result => {
        console.log("succes", result);
      })
      .catch(error => {
        console.log("error", error)
      })
  }, [formValues, executeRecaptcha]);


  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          id="name"
          name="name"
          aria-describedby="nameHelp"
          value={formValues.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="surname">Surname</label>
        <input
          className="form-control"
          id="surname"
          name="surname"
          aria-describedby="surnameHelp"
          value={formValues.surname}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  )
};

export default FormWithRecaptchaV3;
