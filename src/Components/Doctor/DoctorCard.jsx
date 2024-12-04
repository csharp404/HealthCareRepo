import Filter from "../GeneralBlock/Filter";
import { useNavigate } from "react-router-dom";
import img from "/Person.png";

export default function DoctorTable({ doctor }) {
  const navigate = useNavigate();

  return (
    <>
      <Filter />
      <div className="card m-4" style={{ width: "18rem" }}>
        <img
          className="card-img-top m-1 "
          src={img}
          alt="Doctor illustration"
        />
        <div className="card-body">
          <h5 className="card-title">{doctor?.name || "Fu'ad"}</h5>
          <p className="card-text">
            {doctor?.description || "General Practitioner"}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/doctor-details`)} ///${doctor?.id || 1}
          >
            Details
          </button>
        </div>
      </div>
    </>
  );
}
