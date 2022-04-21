import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function CreateUser() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  // Collect input data
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8005/api/", inputs).then(function (response) {
      console.log(response.data);
      navigate("/");
    });
    console.log(inputs);
  };

  return (
    <div>
      <h1>Create Users</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" onChange={handleChange} />
        <br />
        <label htmlFor="mobile">Mobile:</label>
        <input type="text" name="mobile" id="mobile" onChange={handleChange} />
        <br />
        <button>save</button>
      </form>
    </div>
  );
}

// React Router DOM
export default CreateUser;
