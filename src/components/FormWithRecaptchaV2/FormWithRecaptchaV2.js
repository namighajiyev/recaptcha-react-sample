import React, { useState, useCallback, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { postPersonWithRecaptchV2 } from '../../helpers/api';


const FormWithRecaptchaV2 = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    surname: ''
  });
  const recaptchaRef = useRef();

  const handleChange = useCallback((e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }, [formValues]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();
    console.log(token);
    if (!token) {
      return;
    }
    console.log(formValues);
    postPersonWithRecaptchV2({ person: formValues, recaptchaToken: token })
      .then(result => {
        if (!!result.error) { throw result.error; }
        console.log("succes", result);
      })
      .catch(error => {
        console.log("error", error)
      })
    recaptchaRef.current.reset();
  }, [formValues]);

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
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
          name="surname"
          aria-describedby="surnameHelp"
          value={formValues.surname}
          onChange={handleChange}
        />
      </div>
      <ReCAPTCHA
        sitekey="6LdTdrkZAAAAAERTzXeX02pqnozVZO1hSzvR4K5H"
        ref={recaptchaRef}
        hl="az"
      />
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>

  )
};

export default FormWithRecaptchaV2;
