import React, { useState } from 'react';

const TodoList = () => {
  const [formData, setFormData] = useState({
    time: '',
    note: ''
  });

  const [tableData, setTableData] = useState([]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    setTableData([...tableData, formData]);
    setFormData({
      time: '',
      note: ''
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className="form">
        <input
          name="time"
          type="time"
          value={formData.time}
          onChange={handleFormChange}
        />
        <input
          name="note"
          type="text"
          value={formData.note}
          onChange={handleFormChange}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <br />
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.time}</td>
                <td>{data.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
