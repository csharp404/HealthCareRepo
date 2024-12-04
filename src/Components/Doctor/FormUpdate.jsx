import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const DoctorForm = ({ doctorData, onUpdate }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(doctorData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    alert("Doctor information updated successfully!");
    navigate("/DoctorDetails");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Edit Doctor Information</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {Object.entries(formData).map(([key, value]) =>
              key === "profileLink" ? null : (
                <div className="mb-3 row" key={key}>
                  <label
                    className="form-label text-capitalize col-sm-3 fw-bold"
                    htmlFor={key}
                  >
                    {key.replace(/([A-Z])/g, " $1")}
                  </label>
                  <div className="col-sm-9">
                    {key === "gender" ? (
                      <select
                        id={key}
                        name={key}
                        className="form-select"
                        value={value}
                        onChange={handleChange}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    ) : key === "address" ? (
                      <textarea
                        id={key}
                        name={key}
                        className="form-control"
                        value={value}
                        onChange={handleChange}
                        rows="3"
                      />
                    ) : (
                      <input
                        type={key === "hireDate" ? "date" : "text"}
                        id={key}
                        name={key}
                        className="form-control"
                        value={value}
                        onChange={handleChange}
                      />
                    )}
                  </div>
                </div>
              )
            )}
            <button type="submit" className="btn btn-primary w-100 mt-4">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Example usage
const sampleDoctor = {
  name: "Dr. John Doe",
  hireDate: "2021-01-15",
  department: "Cardiology",
  experience: "10 years",
  age: 45,
  phone: "+1 555-555-5555",
  gender: "Male",
  email: "john.doe@example.com",
  address: "123 Main Street, Cityville, Country",
  profileLink: "#",
};

const App = () => {
  const updateDoctorInfo = (updatedData) => {
    console.log("Updated Doctor Info:", updatedData);
  };

  return <DoctorForm doctorData={sampleDoctor} onUpdate={updateDoctorInfo} />;
};

export default App;
