import { useState } from "react";
import "../styles/Experience.css";

function Experience() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [stdate, setStDate] = useState("");
  const [endate, setEnDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [experiences, setExperiences] = useState([]);
  const [isEditing, setIsEditing] = useState(true);

  function formatDate(dateString) {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  }

  function handleAddExperience() {
    const newExperience = { company, position, stdate, endate, location, description };
    setExperiences([...experiences, newExperience]);
    setCompany("");
    setPosition("");
    setStDate("");
    setEnDate("");
    setLocation("");
    setDescription("");
  }

  if (isEditing) {
    return (
      <div className="experience">
        <h2>Experience</h2>
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company Name" />
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" />
        <input type="date" value={stdate} onChange={(e) => setStDate(e.target.value)} />
        <input type="date" value={endate} onChange={(e) => setEnDate(e.target.value)} />
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter each achievement on a new line" />
        <div className="button-row">
          <button onClick={handleAddExperience}>Add Experience</button>
          <button onClick={() => setIsEditing(false)}>Finish</button>
        </div>
        {experiences.length > 0 && (
          <div>
            <h3>Added Experiences</h3>
            {experiences.map((exp, index) => (
              <p key={index}>{exp.company} - {exp.position}</p>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index}>
          <div className="experience-row">
            <h3>{exp.company}</h3>
            <span>{formatDate(exp.stdate)} - {formatDate(exp.endate)}</span>
          </div>
          <div className="experience-row">
            <p>{exp.position}</p>
            <p>{exp.location}</p>
          </div>
          <ul className="description-list">
            {exp.description.split("\n").map((point, i) =>
              point.trim() ? <li key={i}>{point}</li> : null
            )}
          </ul>
          <hr />
        </div>
      ))}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
}

export default Experience;