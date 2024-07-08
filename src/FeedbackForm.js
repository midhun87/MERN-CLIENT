import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    roll: '',
    class: ''
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormSubmitted(true);
  };

  return (
    <div id="mid">
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Roll:
          <input type="text" name="roll" value={formData.roll} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Class:
          <input type="text" name="class" value={formData.class} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {formSubmitted && <p>Form submitted!</p>}

      {submittedData && (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Roll</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{submittedData.name}</td>
              <td>{submittedData.age}</td>
              <td>{submittedData.roll}</td>
              <td>{submittedData.class}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FeedbackForm;
