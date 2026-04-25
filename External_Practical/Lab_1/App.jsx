import { useState } from "react";

export default function App() {
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!patientName || !email) {
      alert("Both fields are required!");
      return;
    }

    console.log("Patient Name:", patientName);
    console.log("Email:", email);

    setPatientName("");
    setEmail("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Patient Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Patient Name: </label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button style={{ marginTop: "10px" }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
